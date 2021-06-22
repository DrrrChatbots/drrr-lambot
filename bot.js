const fs = require('fs');
const https = require('https');
const querystring = require('querystring');
const LS = require('./LambdaScript')

const endpoint = "https://drrr.com";

function fetch(url, [opts, body], callback){
  url = new URL(url);
  opts.host = url.host;
  opts.port = {'https:': 443, 'http:': 80}[url.protocol];
  opts.path = url.pathname + url.search;

  if(body){
    body = querystring.stringify(body);
    opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    opts.headers['Content-Length'] = body.length
  }

  let req = https.request(opts, res => {
    res.setEncoding('utf8');
    let queue = '';
    res.on('data', chunk => queue += chunk);
    res.on('end', () => {
      callback && callback({
        status: res.statusCode,
        headers: res.headers,
        text: queue,
      })
    });
  });
  if(body){ req.write(body); }
  req.end();
}

function getCookie(res){
  let headers = res.headers;
  let cookies = headers['Set-Cookie'] || headers['set-cookie'];
  // what if cookies is a string instead of an array
  if ( (cookies != null) && (cookies[0].length == 1) ) {
    cookies = new Array(1);
    cookies[0] = headers['Set-Cookie'] || headers['set-cookie'];
  }
  for (let i = 0; i < cookies.length; i++)
    cookies[i] = cookies[i].split(';')[0];
  return cookies.join(";");
}

function readJson(fn){
  try{ return JSON.parse(fs.readFileSync(fn, {encoding:'utf8', flag:'r'})); }
  catch(e){ return {}; }
}

function writeJson(fn, obj){
  return fs.writeFileSync(fn, JSON.stringify(obj));
}

function talk2event(talk, bot){
  let evt = {
    type: "",
    user: (talk.from && talk.from.name) || "",
    trip: (talk.from && talk.from.tripcode) || "",
    from: (talk.from || false),
    text: talk.content || talk.message || "",
    url: talk.url || ""
  };
  if(talk.type === 'message')
    evt.type = talk.to ? (talk.from.name == bot.name ? 'dmto': 'dm') : 'msg';
  else evt.type = talk.type;
  return evt;
}

class Bot{

  meta = null;
  events = {};
  states = {};
  cur_st = "";
  loopID = null;
  listen = null;
  history = null;
  room = {};

  constructor(...args){

    let machine = args.find(v => typeof v === 'object');
    args = args.filter(v => typeof v !== 'object');
    let [name, avatar, lang, agent, config] = args;
    this.name = name;
    this.avatar = avatar;
    this.cookie = null;
    this.lang = lang || 'en-US';
    this.agent = agent || 'Bot';
    this.config = config || "config.json";

    if(machine) {
      console.log("start listening...")
      script_listen(this, machine);
    }
  }

  data(p){
    if(!p) return {
      name: this.name,
      avatar: this.avatar,
      cookie: this.cookie
    };
    else Object.keys(p).forEach(k => {
      this[k] = p[k];
    });
  }

  save(){
    let json = readJson(this.config);
    json['bot'] = this.data();
    writeJson(this.config, json);
  }

  load(){
    let json = readJson(this.config);
    let p = json['bot'] || false;
    if(!p) return false;
    this.data(p);
    return true;
  }

  saveDB(){
    let json = readJson(this.config);
    json['bots'] = json['bots'] || {};
    json['bots'][this.cookie] = [this.name, this.avatar, this.cookie];
    writeJson(this.config, json);
  }

  loadDB(index){
    index = index || 0;
    let json = readJson(this.config);
    let recs = Object.keys(json['bots'] || {});
    if(recs.length <= index) return false;
    [this.name, this.avatar, this.cookie] = recs[index];
    return true;
  }

  get(url, callback){
    let opts = {
      'method':'GET',
      'headers':{ 'User-Agent': this.agent }
    };
    if(this.cookie)
      opts.headers.cookie = this.cookie;
    fetch(url, [opts], callback);
  }

  post(url, data, callback){
    let opts = {
      'method':'POST',
      'headers':{ 'User-Agent': this.agent },
      'muteHttpExceptions': true
    };
    if(this.cookie)
      opts.headers.cookie = this.cookie;
    fetch(url, [opts, data], callback);
  }

  login(...args){
    let callback = args.find(v => typeof v === 'function');
    let ready = args.find(
      v => typeof v === 'boolean') || true;

    function get_login_token(bot, callback){
      bot.get(endpoint + "/?api=json", res => {
        if(res.status == 200){
          let data = JSON.parse(res.text);
          if(data.redirect) return callback(res);
          callback && callback(data['token'], getCookie(res));
        }
        else{
          console.log(res.status);
          console.log(res.text);
          callback && callback(res);
        }
      });
    }

    get_login_token(this, (token, cookie) => {

      if(!cookie) return callback && callback(token);

      let form = {
        'name' : this.name,
        'login' : 'ENTER',
        'token' : token,
        'language' : this.lang,
        'icon' : this.avatar
      };

      this.cookie = cookie;

      this.post(endpoint + "/?api=json", form, res => {
        if(res.status == 200){
          this.cookie = getCookie(res);
          if(ready)
            this.getReady(() => callback && callback(res));
          else callback(res);
        }
        else{
          callback && callback(res);
        }
      });
    });
  }

  getLounge(callback){
    this.get(endpoint + "/lounge?api=json", res => {
      let json;
      try{ json = JSON.parse(res.text); }
      catch(e){ json = res.text; }
      this.lounge = json;
      this.rooms = json.rooms;
      callback && callback(json);
    });
  }

  getRoom(callback){
    this.get(endpoint + "/room?api=json", res => {
      // can set user and profile
      let json = JSON.parse(res.text);
      this.room = json.room;
      this.users = this.room.users;
      callback && callback(json);
    });
  }

  getProfile(callback){
    this.get(endpoint + "/profile/?api=json", res => {
      let json;
      try{ json = JSON.parse(res.text); }
      catch(e){ json = res.text; }
      this.profile = json.profile;
      callback && callback(json.profile);
    });
  }

  getLoc(callback){
    this.getRoom(info => {
      this.setInfo(info);
      callback && callback(this.loc);
    })
  }

  setInfo(info){
    if(info){
      this.prevInfo = this.info;
      this.info = info;
      if(info.prfile)
        this.profile = info.profile;
      if(info.user)
        this.user = info.user;
      if(info.room){
        this.room = info.room;
        this.users = info.room.users;
      }
    }
    if(info && info.redirect)
      this.loc = info.redirect;
    else this.loc = "room";
  }

  getReady(callback){
    this.getProfile(() => {
      this.getLoc(() => {
        this.getLounge(callback);
      });
    });
  }

  update(callback){
    let url = "/json.php";
    if(this.history) url += `?update=${this.history.update}`;
    this.get(endpoint + url, res => {
      let json = JSON.parse(res.text);
      //console.log("update ===> ", json);
      if(json.users){
        this.room = json;
        this.users = json.users;
      }
      callback && callback(json);
      this.history = json;
    });
  }

  handleUser(talk){
    if(talk.type === 'join'){
      let users = this.room.users || []
      let index = users.findIndex(u => u.id == talk.user.id);
      if(index < 0) this.room.users.push(talk.user);
    }
    else if(talk.type === 'leave'){
      let users = this.room.users || []
      let index = users.findIndex(u => u.id == talk.user.id);
      if(index >= 0) this.room.users.splice(index, 1);;
    }
  }

  handle(talk){
    // ignore room history
    if(!this.history) return;

    let e = talk2event(talk, this);
    (this.events[e.type] || []).forEach(
      f => f(e.user, e.text, e.url, e.trip, e))

    if(this.listen)
      this.listen(e)
  }

  event(type, callback){
    this.events[type] = this.events || [];
    this.events.push(callback);
  }

  state(name, callback){
    this.states[name] = callback;
  }

  going(name){
    let dest = this.states[name];
    if(!dest) return console.log("no such state");
    this.cur_st = name;
    dest();
  }

  visit(name){
    let dest = this.states[name];
    if(!f) return console.log("no such state");
    this.cur_st = name;
    dest();
  }

  create(...args){

    let callback = args.find(v => typeof v === 'function');
    args = args.filter(v => typeof v !== 'function');

    let [name, desc, limit, lang, music, adult, hidden] = args;
    let form =  {
      name: name || 'DOLLARS',
      description: desc || '',
      limit: limit || 5,
      language: lang || this.lang,
      music: music || false,
      adult: adult || false,
      conceal: hidden || false,
      submit: "Create+Room"
    };

    this.post(endpoint + "/create_room/?api=json", form, res => {
      if(!callback) return;
      if(res.status == 200)
        callback(res.text);
      else callback(false);
    });
  }

  join(id, callback){
    this.get(endpoint + "/room/?id=" + id + "&api=json", res => {
      let json = JSON.parse(res.text)
      callback && callback(json)
      let handle_count = 0;
      let handle = () => {
        if(handle_count) return;
        handle_count += 1;
        this.update(json => {
          let room = json;
          if(room && room.talks){
            room.talks.forEach(talk => this.handleUser(talk));
            room.talks.forEach(talk => this.handle(talk));
          }
          handle_count -= 1;
        });
      }
      if(!this.loopID)
        this.loopID = setInterval(handle, 5000);
      handle();

    });
  }

  room_api(cmd, callback){
    this.post(endpoint + "/room/?ajax=1&api=json", cmd, res => {
      if(!callback) return;
      if(res.status == 200){
        callback && callback(res.status);
      }
      else{
        console.log(res.status)
        console.log(res.text);
        callback && callback(false);
      }
    });
  }

  leave(callback){ this.room_api({'leave': 'leave'}, callback); }

  roomName(name, callback){ this.room_api({'room_name': String(name)}, callback); }

  roomDesc(desc, callback){ this.room_api({'room_description': String(desc)}, callback); }

  dj(mode, callback){ this.room_api({'dj_mode': String(mode).lower()}, callback); }

  send(msg, url, callback){
    let cmd = {'message': msg };
    if(url) cmd.url = url;
    this.room_api(cmd, callback);
  }

  sendTo(uid, msg, url, callback){
    let cmd = {'message': msg, 'to': uid };
    if(url) cmd.url = url;
    this.room_api(cmd, callback);
  }

  music(name, url, callback){ this.room_api({'music': 'music', 'name': name, 'url': url}, callback); }

  handOver(uid, callback){ this.room_api({'new_host': uid}, callback); }

  kick(uid, callback){ this.room_api({'kick': uid}, callback); }

  ban(uid, callback){ this.room_api({'ban': uid}, callback); }

  report(uid, callback){ this.room_api({'report_and_ban_user': uid}, callback); }

  unban(uid, callback){ this.room_api({'unban': uid}, callback); }


  // for werewolf room on drrr.com
  player(name, player = false){
    let users = this.room.users || []
    let u = users.find(x => x.name === name)
    this.room_api({'player': player, to: u.id });
  }

  alive(name, alive = false){
    let users = this.room.users || []
    let u = users.find(x => x.name === name)
    this.room_api({'alive': alive, to: u.id });
  }

  /* alias for extension name binding */

  /* alias for roomName */
  title = this.roomName.bind(this);

  /* alias for roomDesc */
  descr = this.roomDesc.bind(this);

  /* alias for send */
  print = this.send.bind(this);

  /* alias for sendTo */
  dm = function(name, ...args){
    let users = this.room.users || []
    let u = users.find(x => x.name === name)
    this.sendTo((u && u.id) || "", ...args);
  }

  /* alias for handOver */
  chown = this.handOver.bind(this);
  host = this.handOver.bind(this);

  /* port more powerful play function */
  play = this.music.bind(this);
}

function name_trip_split(expr){
  let e = expr.split('#');
  return [e[0], e.length > 1 ? e[e.length - 1] : undefined];
}

function match_user(name, trip, nameTripRegex){
  let [nameRegex, tripRegex] = name_trip_split(nameTripRegex);
  if(name === undefined) name = "";
  if(trip === undefined) trip = "";
  if(nameTripRegex.includes('#'))
    return name.match(new RegExp(nameRegex, 'i')) && (trip && trip.match(new RegExp(tripRegex, 'i')));
  else
    return name.match(new RegExp(nameRegex, 'i'));
}

function script_listen(user, machine){
  function event_action(event, config, req){

    machine = LS.Main.getMain(machine);

    let rules = machine.events[""] || []

    if(machine.cur.length)
      rules = rules.concat(machine.events[machine.cur] || [])

    rules.map(([type, user_trip_regex, cont_regex, action])=> {
      if((Array.isArray(type) && type.includes(event)) || type == event){
        if(match_user(req.user, req.trip, user_trip_regex)){
          if((req.text === 'unknown' || req.text === undefined)
            || req.text.match(new RegExp(cont_regex))){
            action(req.user, req.text, req.url, req.trip, req);
          }
        }
      }
    });
  }
  user.listen = e => event_action(e.type, null, e);
}

module.exports = {
  Bot: Bot,
  listen: script_listen
};
