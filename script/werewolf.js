// usage:
//   werewolf("zh");
//   werewolf("en");

language = "en"

i18n = {
  "en": {
    "notBeg": "Game not start yet.",
    "werewolves": "Werewolves",
    "whiteWolf": "WhiteWolfKing",
    "blackWolf": "BlackWolfKing",
    "villagers": "Villagers",
    "seer": "Seer",
    "witch": "Witch",
    "hunter": "Hunter",
    "guard": "Guard",
    "idiot": "Idiot",
    "joined": u => u + " has already joined",
    "joins" : u => u + " joins the game",
    "leaves": u => u + " leaves the game",
    "notIn": u => u + " is not in the game",
    "players": ns => "Players:\n" + ns,
    "action" : "Please take action",
    "noPoison": "No poison left",
    "noMedicine": "No medicine left",
    "configNotFit": (lim, len) => "Need " + lim + " people, " + len + " people current.",
    "noPlayerBeg": "No player, please start the game",
    "prepare": "[+1] join [-1] out [/go] start [/?] other",
    "setting": "[/side] side mode\n[/noside] clear mode\n[/self] witch can save self\n[/noself] witch cannot save self\n[/set (...)] set config with optional int array ([1, 2, 3])\n[/setup] show setup",
    "UrRole": r =>  "You are " + r,
    "UrWerewolf": (wv, wvs) => "You are " + wv + ", all werewolves are " + wvs,
    "night": d => "The " + String(d) + ord(d) + " day. Night, please close your eyes.",
    "talkSeer": "Seer, open your eyes, whose info do you want to know (*dm* [name])...",
    "wantToKnow": "What do you want to know",
    "people": "people",
    "werewolf": "werewolf",
    "noSuchPeople": "No such people",
    "oneAsk": "Only one asking is allowed",
    "deadRole": r => "You are dead " + r,
    "dupProtect": "You cannot protect same people for two consecutive nights",
    "notRole": r => "You are not " + r,
    "beQuiet": u => "@" + u + " BE QUIET!",
    "talkWerewolves": "Werewolves, open your eyes, take actions (*dm* [no] or [name])...",
    "askKill": "Kill people?",
    "oneKill": "Only one kill is allowed",
    "talkWitch": "Witch, open your eyes, take actions (*dm* [no] or [save] or [poison name])...",
    "talkGuard": "Guard, open your eyes, take actions (*dm* [no] or [name])...",
    "victims": vs => "Victim:" + vs,
    "can'tSaveSelf": "Cannot save yourself",
    "deadMan": "The man is dead",
    "unkCmd": "Unknown command",
    "oneCmd": "Only one command is allowed",
    "shooter15s": "send any message in 15 secs to show you are hunter/werewolfKing",
    "hunterShow": n => "The hunter @" + n + " is dead! ... and (other dead guys continue their last words)",
    "blackWolfShow": n => "The WolfKing @" + n + " is dead! ... and (other dead guys continue their last words)",
    "idiot15s": "send any message in 15 secs to show you are idiot",
    "idiotShow": n => "@" + n + " is the idiot! Escaped from the execution!",
    "fired": h => h + " kill... (choose a player)",
    "survivors": ss => "Survivor:" + ss,
    "hit": t => ", and hit " + t + " before he died",
    "morning": d => "The " + String(d) + ord(d) + " day. Morning, Sun Arise.",
    "died": us => us + " died",
    "rip30s": "R.I.P for 30 secs",
    "morningSafe": "Morning, no one died",
    "speaking": n => "@" + n + " start speaking (end with [over]), [/skip] to skip the guy, [/expo name] werewolf expose self, WhiteWolfKing kills the name",
    "voting": "Please start voting (can use dm) ([/vote] check voted, [/urge] reminder, [/execute] skip, [/vote name] or [/vote no] abstain)",
    "voteNote": cans => "Message to vote, candidates:\n" + cans,
    "oneVote": "Only one vote is allowed",
    "checkVote": t => "Ok, you vote " + t,
    "voteDead": t => t + " is already dead (or idiot)",
    "abstain": "Ok, abstain",
    "noRight": "You have no voting right",
    "curVote": us => "Current voted:" + us,
    "urgeVote": us => us + " vote, please!",
    "urgeShoot": us => us + " kill, please!",
    "reVote": us => "Top people:" + us + ", revote",
    "execute": us => "Execute:" + us,
    "noExecute": us => "Top people again:" + us + ", no execute",
    "draw": "Game Over, draw",
    "peopleWin": "Game Over, people win",
    "werewolvesWin": "Game Over, werewolves win",
    "notPlayer": "You are not player",
    "alive": "Alive",
    "dead": "Dead",
    "manual": "/help The manual\n/s Game State\n/w All Players\n/r Your Role\n/alive name [false] set alive\n/player name [false] set player\n/game Start Participating (Will restart if game is running)"
  },
  "zh": {
    "notBeg": "尚未開始遊戲",
    "werewolves": "狼",
    "whiteWolf": "白狼王",
    "blackWolf": "黑狼王",
    "villagers": "平民",
    "seer": "預言家",
    "witch": "女巫",
    "hunter": "獵人",
    "guard": "守衛",
    "idiot": "白痴",
    "joined": u => u + " 已經加入了",
    "joins" : u => u + " 加入遊戲",
    "leaves": u => u + " 退出遊戲",
    "notIn": u => u + " 不在遊戲中",
    "players": ns => "玩家：\n" + ns,
    "action" : "請採取行動",
    "noPoison": "沒有毒藥了",
    "noMedicine": "沒有解藥了",
    "configNotFit": (lim, len) => "需滿足 " + lim + " 人, 目前 " + len + " 人",
    "noPlayerBeg": "沒有玩家，請開始報名程序",
    "prepare": "[+1] 加入 [-1] 退出 [/go] 開始 [/?] 其他",
    "setting": "[/side] 屠邊\n[/noside] 屠城\n[/self] 女巫自救\n[/noself] 女巫無法自救\n[/set (...)] 角色配置([1, 2, 3])\n[/setup] 顯示配置",
    "UrRole": r =>  "你的身份是：" + r,
    "UrWerewolf": (wv, wvs) => "你是" + wv + ", 所有狼是：" + wvs,
    "night": d => "第 " + String(d) + " 天，天黑請閉眼/夜",
    "talkSeer": "預言家請睜眼，你想知道關於誰的訊息（*私信* [人名]）...",
    "wantToKnow": "想知道什麼",
    "people": "人",
    "werewolf": "狼",
    "noSuchPeople": "沒這個人",
    "oneAsk": "只能問一次",
    "deadRole": r => "你是死掉的" + r,
    "dupProtect": "不能連續保護同一人兩晚",
    "beQuiet": u => "@" + u + " 不要吵！",
    "talkWerewolves": "狼人請睜眼，請採取行動（*私信* [no] or [人名]）...",
    "askKill": "要殺人嗎？",
    "oneKill": "只能殺一次",
    "talkWitch": "女巫請睜眼，請採取行動（*私信* [no] or [save] or [poison 人名]）...",
    "talkGuard": "守衛請睜眼，請採取行動（*私信* [no] or [人名]）...",
    "victims": vs => "受害者：" + vs,
    "can'tSaveSelf": "不能自救",
    "deadMan": "這人已經死了",
    "unkCmd": "未知的指令",
    "oneCmd": "只能用一次指令",
    "shooter15s": "十五秒內發任何訊息以亮獵人/狼王牌",
    "hunterShow": n => "獵人 @" + n + " 死了！... 然後...（請其他死者繼續發表遺言）",
    "blackWolfShow": n => "狼王 @" + n + " 死了！... 然後...（請其他死者繼續發表遺言）",
    "idiot15s": "十五秒內發任何訊息以亮白痴牌",
    "idiotShow": n => "@" + n + " 的身份是白痴！他逃過了一劫！",
    "fired": h => h + " 在臨死前殺死了...（選一個玩家）",
    "hit": t => "這一槍落到了 @" + t + " 身上",
    "survivors": ss => "倖存者：" + ss,
    "morning": d => "第 " + String(d) + " 天，東方漸泛魚肚白/早上",
    "died": us => us + " 死了",
    "rip30s": "請大家默哀三十秒",
    "morningSafe": "天亮了，沒有人死",
    "speaking": n => "請 @" + n + " 開始發言 ([over] 結尾), [/skip] 跳過此人, [/expo name] 使用狼人自爆（白狼可帶走 name）",
    "voting": "請開始投票（可私信）([/vote] 看已投票, [/urge] 催票, [/execute] 跳過投票, [/vote 人名] 或是 [/vote no] 棄票)",
    "voteNote": cans => "發言以投票，選項有：\n" + cans,
    "oneVote": "一人一票，落票無悔",
    "checkVote": t => "ok, 你投了 " + t,
    "voteDead": t => t + " 是個死人（或白痴）。",
    "abstain": "ok, 你棄票了",
    "noRight": "你沒有投票權",
    "curVote": us => "目前已投票：" + us,
    "urgeVote": us => us + " 快點投票！",
    "urgeShoot": us => us + " 快點殺人！",
    "reVote": us => "最高得票人：" + us + ", 重新投票",
    "execute": us => "處死最高得票人：" + us,
    "noExecute": us => "仍有多個最高票：" + us + ", 取消死刑",
    "draw": "遊戲結束，平局",
    "peopleWin": "遊戲結束，人類勝出",
    "werewolvesWin": "遊戲結束，狼人勝出",
    "notPlayer": "你不是玩家",
    "alive": "活",
    "dead": "死",
    "manual": "/help 本手冊\n/s 現在遊戲狀態\n/w 當前所有玩家\n/r 當前擔任角色\n/alive name [false] 設定活死\n/player name [false] 設定玩家\n/game 開始報名（如有遊戲則重新）"
  }
}

T = (key) => i18n[language][key]

me = (str) => "/me" + str

ord_enum = { 0: "th", 1: "st", 2: "nd", 3: "rd" }

ord = (num) => if num > 3 then "th" else ord_enum[num]

names = []
players = {}
victim = []
vote = {}
day = 1
vote_times = 0
protect = ""

// 0: kill side, 1: clear people
kill_mode = 0
save_self = 0

announcement = me(T("notBeg"))
announce = (msg) => {
  announcement = msg
  drrr.print(msg)
}

scene = (desc) => {
  announcement = desc
  if drrr.room.host == drrr.user.id
  then drrr.descr(desc.replace("/me", ""))
  else drrr.print(desc)
}

setAlive = (name, state) => {
  if drrr.room.gameRoom && drrr.room.host == drrr.user.id
  then drrr.alive(name, state)
}

setPlayer = (name, state) => {
  if drrr.room.gameRoom && drrr.room.host == drrr.user.id
  then drrr.player(name, state)
}

// 0 werewolf 1 villagers 2 seer 3 witch 4 hunter 5 guard
roles = []
roleName = {}
roleUrl = {}

rWing = -2
rBing = -1
rWolf = 0
rVill = 1
rSeer = 2
rWitc = 3
rHunt = 4
rGuar = 5
rIdio = 6

isWolf = r => r <= 0
isGod = r => r > 1
isShooter = r => (r == rHunt || r == rBing)

initRoleName = () => {
  roleName = {}
  roleName[rWing] = T("whiteWolf")
  roleName[rBing] = T("blackWolf")
  roleName[rWolf] = T("werewolves")
  roleName[rVill] = T("villagers")
  roleName[rSeer] = T("seer")
  roleName[rWitc] = T("witch")
  roleName[rHunt] = T("hunter")
  roleName[rGuar] = T("guard")
  roleName[rIdio] = T("idiot")
  roleUrl = {}
  roleUrl[rWing] = "https://werewolf.cc/wp-content/uploads/2020/07/狼人殺白狼王.jpg"
  roleUrl[rBing] = "https://werewolf.cc/wp-content/uploads/2020/07/狼人殺狼王.jpg"
  roleUrl[rWolf] = "https://werewolf.cc/wp-content/uploads/2020/07/狼人殺狼人.jpg"
  roleUrl[rVill] = "https://werewolf.cc/wp-content/uploads/2020/07/狼人殺平民.jpg"
  roleUrl[rSeer] = "https://werewolf.cc/wp-content/uploads/2020/07/狼人殺預言家.jpg"
  roleUrl[rWitc] = "https://werewolf.cc/wp-content/uploads/2020/07/狼人殺舞會女巫.jpg"
  roleUrl[rHunt] = "https://werewolf.cc/wp-content/uploads/2020/07/狼人殺獵人.jpg"
  roleUrl[rGuar] = "https://werewolf.cc/wp-content/uploads/2020/07/狼人殺首衛.jpg"
  roleUrl[rIdio] = "https://werewolf.cc/wp-content/uploads/2020/07/狼人殺白痴.jpg"
}

rolesMap = {
  5: [[rWolf, rVill, rVill, rSeer, rWitc]],
  6: [[rWolf, rWolf, rVill, rVill, rSeer, rWitc],
      [rWolf, rWolf, rVill, rVill, rSeer, rHunt],
      [rWolf, rWolf, rVill, rVill, rSeer, rGuar],
      [rWolf, rWolf, rHunt, rHunt, rHunt, rHunt]],
  7: [[rWolf, rWolf, rVill, rVill, rVill, rSeer, rWitc],
      [rWolf, rWolf, rVill, rVill, rVill, rSeer, rHunt],
      [rWolf, rWolf, rVill, rSeer, rWitc, rHunt, rGuar]],
  8: [[rWolf, rWolf, rVill, rVill, rVill, rSeer, rWitc, rHunt],
      [rWolf, rWolf, rWolf, rVill, rVill, rSeer, rWitc, rHunt]],
  9: [[rWolf, rWolf, rWolf, rVill, rVill, rVill, rSeer, rWitc, rHunt]],
  10: [[rWolf, rWolf, rWolf, rVill, rVill, rVill, rVill, rSeer, rWitc, rHunt],
       [rBing, rWolf, rWolf, rVill, rVill, rVill, rVill, rSeer, rHunt, rGuar],
       [rWing, rWolf, rWolf, rVill, rVill, rVill, rVill, rSeer, rHunt, rGuar],
       [rWolf, rWolf, rWolf, rVill, rVill, rVill, rVill, rWitc, rHunt, rGuar],
       [rWolf, rWolf, rWolf, rVill, rVill, rVill, rVill, rWitc, rHunt, rGuar],
       [rWolf, rWolf, rWolf, rVill, rVill, rVill, rSeer, rWitc, rHunt, rIdio],
       [rWolf, rWolf, rWolf, rHunt, rHunt, rHunt, rHunt, rHunt, rHunt, rHunt]],
  11: [[rWolf, rWolf, rWolf, rVill, rVill, rVill, rVill, rVill, rWitc, rHunt, rGuar],
       [rWolf, rWolf, rWolf, rVill, rVill, rVill, rVill, rWitc, rHunt, rGuar, rIdio],
       [rWolf, rWolf, rWolf, rWitc, rWitc, rWitc, rWitc, rWitc, rWitc, rWitc, rWitc]],
  12: [[rWolf, rWolf, rWolf, rWolf, rVill, rVill, rVill, rVill, rSeer, rWitc, rHunt, rGuar],
       [rBing, rWolf, rWolf, rWolf, rVill, rVill, rVill, rVill, rSeer, rWitc, rHunt, rGuar],
       [rWing, rWolf, rWolf, rWolf, rVill, rVill, rVill, rVill, rSeer, rWitc, rHunt, rGuar],
       [rWolf, rWolf, rWolf, rWolf, rVill, rVill, rVill, rVill, rSeer, rWitc, rHunt, rIdio],
       [rWolf, rWolf, rWolf, rWitc, rWitc, rWitc, rWitc, rWitc, rWitc, rWitc, rWitc,
rWitc]]
}

getRandom = (min,max) => {
  Math.floor(Math.random()*(max-min+1))+min
}

select = (cont, users) => {
  result = users.filter((u) => cont.includes(u))
  if result.length
  then result.reduce((a, b)=> if a.length > b.length then a else b)
  else ""
}

map = (obj, func) => Object.values(obj).map(func)
forEach = (obj, func) => Object.values(obj).forEach(func)
filter = (obj, func) => Object.values(obj).filter(func)

most = (arr) => {
  counts = arr.reduce((a, c) => {
    a[c] = (if a.hasOwnProperty(c) then a[c] else 0) + 1
    a
  }, Object())
  print(counts)
  maxCount = Math.max.apply(Object(), Object.values(counts))
  print(maxCount)
  Object.keys(counts).filter(k => counts[k] === maxCount)
}

passJudge = () => {
  werewolves = filter(players, (p, index) => p.life && isWolf(p.role))
  people = filter(players, (p, index) => p.life && !isWolf(p.role))
  villagers = filter(players, (p, index) => p.life && p.role == rVill)
  gods = filter(players, (p, index) => p.life && isGod(p.role))

  if kill_mode
  then { // clear
    if werewolves.length && people.length then -1 // both alive
    else if werewolves.length then 0 // werewolves alive
    else if people.length then 1 // people alive
    else 2 // both zero, draw
  }
  else { // kill side
    if werewolves.length && gods.length && villagers.length then -1 // both alive
    else if werewolves.length then 0 // werewolves alive
    else if gods.length && villagers.length then 1 // people alive
    else 2 // both zero, draw
  }
}

state prepare {
  victim = []
  names = []
  players = {}
  vote = {}
  day = 1
  vote_times = 0
  roles = []
  protect = ""

  event [msg, me] (user, cont: "^\\+1\\s*$") => {
    if names.includes(user)
    then drrr.print(me(T("joined")(user)))
    else{
      names.push(user)
      drrr.print(me(T("joins")(user)))
    }
  }
  event [msg, me] (user, cont: "^-1\\s*$") => {
    if names.includes(user) then {
      names.splice(names.indexOf(user), 1);
      drrr.print(me(T("leaves")(user)))
    }
    else drrr.print(me(T("notIn")(user)))
  }
  event [msg, me] (user, cont: "^/go\\s*$") => {
    if (roles.length && names.length == roles.length)
      || (!roles.length && names.length in rolesMap) then {
      if drrr.room.gameRoom && drrr.room.host == drrr.user.id then going initial
      else going prelude
    }
    else drrr.print(me(T("configNotFit")(
      if roles.length then String(roles.length) else "5 - 12",
      String(names.length)
    )))
  }
  event [msg, me] (user, cont: "^/\\?\\s*$") => {
    drrr.print(T("setting"))
  }
  event [msg, me] (user, cont: "^/side\\s*$") => {
    kill_mode = 0
    drrr.print(me("ok, side mode"))
  }
  event [msg, me] (user, cont: "^/noside\\s*$") => {
    kill_mode = 1
    drrr.print(me("ok, clear mode"))
  }
  event [msg, me] (user, cont: "^/self\\s*$") => {
    save_self = 1
    drrr.print(me("ok, witch can save self"))
  }
  event [msg, me] (user, cont: "^/noself\\s*$") => {
    save_self = 0
    drrr.print(me("ok, witch cannot save self"))
  }
  event [msg, me] (user, cont: "^/set\\b") => {
    config = cont.replace("/set", "").trim()
    valid_roles = "valid roles:\n" +
          Object.keys(roleName).map(k => String(k) + ": " + roleName[k]).join("\n")
    if config then {
      rs = JSON.parse(config)
      invalid = rs.filter(r => !(r in roleName))
      if !rs || !Array.isArray(rs) then
        drrr.print("invalid argument: " + config)
      else if invalid.length then
        drrr.print("invalid roles: " + String(invalid)
          + "\n" + valid_roles)
      else if !rs.filter(r => isWolf(r)).length then
        drrr.print("at least one werewolf")
      else if rs.filter(r => r == rSeer).length > 1 then
        drrr.print("seer cannot be more than one")
      // else if rs.filter(r => r == rWitc).length > 1 then
      //   drrr.print("witch cannot be more than one")
      else if !rs.filter(r => isWolf(r)).length then
        drrr.print("at least one werewolf")
      else {
        roles = rs
        drrr.print(roles.map((r) => roleName[r]).join("\n") + "\nok, config done")
      }
    }
    else {
      roles = []
      drrr.print(valid_roles + "\nok, random config")
    }
  }
  event [msg, me] (user, cont: "^/setup\\s*") => {
    rstr = (if !roles.length
            then "random roles"
            else roles.map((r) => roleName[r]).join("\n"))
    rstr = rstr + "\nkill mode: " + (if kill_mode then "clear" else "side")
    rstr = rstr + "\nsave self: " + (if save_self then "yes" else "no")
    drrr.print(rstr)
  }
  announce(me(T("prepare")))
}

newPlayer = (name, role) => {
  name: name,
  life: true,
  role: role,
  rname: roleName[role],
  rUrl: roleUrl[role],
  diefor: "",
  right: true,
  poison: role == rWitc,
  medicine: role == rWitc,
}

state initial {
  cnt = 1
  drrr.getLoc(()=>{
    drrr.users.forEach((u, i) => {
      isHost = u.name == drrr.user.name
      if names.includes(u.name) != u.player || isHost
      then {
        setTimeout(() => setPlayer(u.name, !u.player || isHost), cnt++ * 1500)
      }
      else if u.player && !u.alive
      then setTimeout(() => setAlive(u.name, true), cnt++ * 1500)
    })
    setTimeout(() => going prelude, cnt++ * 1500)
  })
}

state prelude {

  drrr.print(T("players")(names.map((user, index) => String(index + 1) + ". " + user).join("\n")))

  if !roles.length then {
    comb = rolesMap[names.length]
    roles = comb[Math.floor(Math.random() * comb.length)].slice();
  }

  villagers = filter(players, (p, index) => p.life && p.role == rVill)
  gods = filter(players, (p, index) => p.life && isGod(p.role))

  if !villagers.length || !gods.length then kill_mode = 1

  later 2000 {

    drrr.print(roles.map((r) => roleName[r]).join("\n"))

    roles.sort(()=>Math.random() - 0.5)

    names.forEach((name, index) => {
      players[name] = newPlayer(name, roles[index]);
    })

    wolves = filter(players, (p, index) => isWolf(p.role)).map(p => p.name).join(", ")
    forEach(players, (p, index) => {
      if !isWolf(p.role) then later (index * 3500 + 1000) drrr.dm(p.name, T("UrRole")(p.rname), p.rUrl)
      else later (index * 3500 + 1000) drrr.dm(p.name, T("UrWerewolf")(p.rname, wolves), p.rUrl)
    })

    later names.length * 4000 going night
  }
}

state night {
  scene(me(T("night")(day)))
  later 3500 going night_seer
}

state night_seer {

  theRole = rSeer

  if !roles.includes(theRole) then going night_guard

  announce(me(T("talkSeer")))
  if filter(players, (p, idx) => p.role == theRole && p.life).length then {
    asked = 0

    forEach(players, (p, index) => {
      if p.life && p.role == theRole then
      later 1500 drrr.dm(p.name, T("wantToKnow"))
    })

    event dm (seer, cont) => {
      if seer in players then {
        if !asked && players[seer].role == theRole then {
          if players[seer].life then {
            if !asked then {
              the = select(cont, names)
              if the then {
                drrr.dm(seer, if players[the].role > 0 then T("people") else T("werewolf"))
                asked = 1
                later 3500 going night_guard
              } else drrr.dm(seer, T("noSuchPeople"))
            } else drrr.dm(seer, T("oneAsk"))
          } else drrr.dm(seer, T("deadRole")(T("seer")))
        } else drrr.dm(seer, T("notRole")(T("seer")))
      } else drrr.print(me(T("beQuiet")(seer)))
    }

    event [dm, msg] (user, cont: "^/skip\\s*$") => {
      if user in players then going night_guard
    }

  } else later (getRandom(10, 30) * 1500) going night_guard
}

state night_guard {

  theRole = rGuar

  if !roles.includes(theRole) then going night_wolf

  announce(me(T("talkGuard")))

  if filter(players, (p, idx) => p.role == theRole && p.life).length then {

    used = 0

    names.forEach((name, index) => {
      if players[name].role == theRole then {
        later 3500 drrr.dm(name, T("action"))
      }
    })

    event dm (guard, cont) => {
      if guard in players then {
        if players[guard].role == theRole then {
          if players[guard].life then {
            if !used then {
              the = select(cont, names)
              if cont.startsWith("no") || cont.startsWith("ignore") then {
                used = 1
                protect = ""
                later 3500 going night_wolf
              } else if the.length then {
                if protect == the then
                  drrr.dm(guard, T("dupProtect"))
                else if players[the].life then{
                  protect = the
                  later 3500 going night_wolf
                } else drrr.dm(guard, T("deadMan"))
              } else drrr.dm(guard, T("noSuchPeople"))
            } else drrr.dm(guard, T("oneCmd"))
          } else drrr.dm(guard, T("deadRole")(T("guard")))
        } else drrr.dm(guard, T("notRole")(T("guard")))
      } else drrr.print(me(T("beQuiet")(guard)))
    }

    event [me, msg] (user, cont: "^/skip\\s*$") => {
      if user in players then {
        protect = ""
        going night_wolf
      }
    }

  } else later (getRandom(10, 30) * 1000) {
    protect = ""
    going night_wolf
  }
}

state night_wolf {
  announce(me(T("talkWerewolves")))

  killed = 0

  forEach(players, (p, index) => {
    if p.life && isWolf(p.role) then
    later (2000 * index + 1500) drrr.dm(p.name, T("askKill"))
  })

  event dm (wolf, cont) => {
    if wolf in players then {
      if isWolf(players[wolf].role) then {
        if players[wolf].life then {
          if !cont.startsWith("no") then {
            if !killed then {
              the = select(cont, names)
              if the then {
                victim = [the]
                players[the].diefor = "bite"
                killed = 1
                later 3500 going night_witch
              } else drrr.dm(wolf, T("noSuchPeople"))
            } else drrr.dm(wolf, T("oneKill"))
          } else {
            victim = []
            killed = 1
            later 3500 going night_witch
          }
        } else drrr.dm(wolf, T("deadRole")(T("werewolf")))
      } else drrr.dm(wolf, T("notRole")(T("werewolf")))
    } else drrr.print(me(T("beQuiet")(wolf)))
  }

  event [dm, msg] (user, cont: "^/skip\\s*$") => {
    if user in players then going night_witch
  }
}

state night_witch {

  theRole = rWitc

  if !roles.includes(theRole) then going night_end

  announce(me(T("talkWitch")))

  if filter(players, (p, idx) => p.role == theRole && p.life).length then {

    wait_list = []
    med_counts = 0
    poi_targets = {}

    names.forEach((name, index) => {
      poi_targets[name] = 0
      if (players[name].role == theRole) && players[name].life then {
        wait_list.push(name)
        players[name].used = false;
        if players[name].poison then
          later (1500 * (index + 1)) drrr.dm(name, T("victims")(victim.join(", ")))
        else
          later (1500 * (index + 1)) drrr.dm(name, T("action"))
      }
    })

    check_going = (witch) => {
      index = wait_list.indexOf(witch);
      if index >= 0 then wait_list.splice(index, 1);
      if !wait_list.length
      then {
        if med_counts < 3 && med_counts > 0 then victim = []
        Object.keys(poi_targets).forEach(name => {
          if poi_targets[name] % 2 then {
            if !victim.includes(name)
            then {
              victim.push(name)
              players[name].diefor = "poison"
            }
          }
        })
        later 3500 going night_end
      }
    }

    event dm (witch, cont) => {
      if witch in players then {
        if players[witch].role == theRole then {
          if players[witch].life then {
            if !players[witch].used then {
              the = select(cont, names)
              if cont.startsWith("no") then {
                players[witch].used = true
                check_going(witch)
              } else if cont.startsWith("ignore") then {
                players[witch].used = true
                check_going(witch)
              } else if cont.includes("save") then {
                if !players[witch].medicine then {
                  drrr.dm(witch, T("noMedicine"))
                }
                else if ((!save_self || (save_self && day > 1))
                  && victim.length && victim[0] == witch) then
                  drrr.dm(witch, T("can'tSaveSelf"))
                else if victim.length && victim[0] == protect then {
                  // medicine use on guard
                  players[witch].used = true
                  players[witch].medicine = false
                  players[victim[0]].diefor = "medicine"
                } else {
                  players[witch].used = true
                  players[witch].medicine = false
                  med_counts++
                  check_going(witch)
                }
              } else if cont.includes("poison") then {
                if the.length then {
                  if players[the].life then{
                    if players[witch].poison then {
                      poi_targets[the] = poi_targets[the] + 1
                      players[witch].used = true
                      players[witch].poison = false
                      drrr.dm(witch, "ok, poison " + the)
                      check_going(witch)
                    } else drrr.dm(witch, T("noPoison"))
                  } else drrr.dm(witch, T("deadMan"))
                } else drrr.dm(witch, T("noSuchPeople"))
              } else drrr.dm(witch, T("unkCmd"))
            } else drrr.dm(witch, T("oneCmd"))
          } else drrr.dm(witch, T("deadRole")(T("witch")))
        } else drrr.dm(witch, T("notRole")(T("witch")))
      } else drrr.print(me(T("beQuiet")(witch)))
    }

    event [me, msg] (user, cont: "^/skip\\s*$") => {
      if user in players then {
        wait_list = []
        check_going("")
      }
    }

  } else later (getRandom(10, 30) * 1000) going night_end
}

// need pre-declared vars
// expo: Array of String
// dead: Array of String
state shooter_ask {
  forEach(players, (p, index) => {
    if dead.includes(p.name) && isShooter(p.role) then
    later (1500 * (index + 1)) drrr.dm(p.name, T("shooter15s"))
  })
  event [dm, msg, me] (hunter, cont) => {
    if hunter in players && dead.includes(hunter) then {
      if isShooter(players[hunter].role) && !expo.includes(hunter) then {
        expo.push(hunter)
        if players[hunter].role == rHunt
        then drrr.print(me(T("hunterShow")(hunter)))
        else if players[hunter].role == rBing
        then drrr.print(me(T("blackWolfShow")(hunter)))
      }
    }
  }
}

// need pre-declared vars
// dead: Array of String
state idiot_ask {
  forEach(players, (p, index) => {
    if dead.includes(p.name) && p.role == rIdio then
    later 2000 drrr.dm(p.name, T("idiot15s"))
  })
  event [dm, msg, me] (idiot, cont) => {
    if idiot in players then {
      if players[idiot].role == rIdio && dead.includes(idiot) then {
        drrr.print(me(T("idiotShow")(idiot)))
        players[idiot].life = true
        players[idiot].diefor = ""
        players[idiot].right = false
        index = dead.indexOf(idiot);
        if index >= 0 then dead.splice(index, 1);
        setTimeout(() => setAlive(idiot, true), 1500)
      }
    }
  }
}

// need pre-declared vars
// expo: Array of String
state shooter_fire {
  new_count = 0
  new_expo = []
  new_dead = []
  drrr.print(me(T("fired")("@" + expo.join(", @"))))
  event [msg, me, dm] (hunter, cont) => {

    if hunter in players then {

      if new_dead.includes(hunter) then {
        print("yes you are here")
        if isShooter(players[hunter].role) && !new_expo.includes(hunter) then {
          new_expo.push(hunter)
          if players[hunter].role == rHunt
          then drrr.print(me(T("hunterShow")(hunter)))
          else if players[hunter].role == rBing
          then drrr.print(me(T("blackWolfShow")(hunter)))
        }
      }
      else if isShooter(players[hunter].role) && expo.includes(hunter) then {
        print("no you are not here")
        the = select(cont, names)
        if the then {
          if players[the].life then {
            players[the].life = false
            players[the].right = false
            players[the].diefor = "shoot"
            drrr.print(me(T("hit")(the)))
            setTimeout(() => setAlive(the, false), 1500)

            check = () => {
              if !expo.length && !new_count then {
                if new_expo.length then {
                  expo = new_expo
                  new_expo = []
                  new_dead = []
                  drrr.print(me(T("fired")("@" + expo.join(", @"))))
                }
                else go_next()
              }
            }

            // what if isShooter
            if isShooter(players[the].role) then {
              // send asking info
              j = passJudge()
              if (isWolf(players[the].role)) && (j == 1) then going game_over
              if (!isWolf(players[the].role)) && (j == 0) then going game_over

              new_dead.push(players[the].name)
              new_count++
              later 1500 drrr.dm(players[the].name, T("shooter15s"))
              setTimeout(() => {
                new_count--;
                check();
              }, 16000)
            } else prinit("not shooter")

            index = expo.indexOf(hunter);
            if index >= 0 then expo.splice(index, 1);
            check();

          } else drrr.dm(hunter, T("deadMan"))
        } else drrr.dm(hunter, T("noSuchPeople"))
      }
    }
  }

  event [msg, me] (user, cont: "^/urge\\s*$") => {
    drrr.print(me(T("urgeShoot")("@" + expo.join(", @"))))
  }

  event [msg, me] (user, cont: "^/skip\\s*$") => {
    if user in players then go_next()
  }
}

state night_end {

  expo = []

  day = day + 1

  go_next = {
    drrr.print(me(T("survivors")(filter(players, p => p.life).map(p => p.name).join(", "))))
    if passJudge() < 0
    then later 3500 going day_discussion
    else later 3500 going game_over
  }

  scene(T("morning")(day))

  later 3000 {
    if victim.length then {

      if victim.includes(protect) then {
        if players[protect].diefor == "bite" then {
          players[protect].diefor = ""
          index = victim.indexOf(protect);
          if index >= 0 then victim.splice(index, 1);
        }
      }

      if victim.length then{
        announce(me(T("died")(victim.map((x)=>"@" + x).join(", "))))
        later 2000 {

          exist_shooter = false
          victim.forEach((name, index) => {
            setTimeout(() => setAlive(name, false), index * 1500)
            if isShooter(players[name].role) && players[name].diefor != "poison"
            then exist_shooter = true
          })

          if exist_shooter then {
            dead = victim
            visit shooter_ask
          }

          later 5000 {
            drrr.print(me(T("rip30s")))
            later 30000 {
              victim.forEach((name) => {
                players[name].life = false
                players[name].right = false
              })

              if expo.length
              then visit shooter_fire
              else go_next()
            }
          }
        }
      }
      else {
        announce(me(T("morningSafe")))
        later 3500 go_next()
      }
    } else {
      announce(me(T("morningSafe")))
      later 3500 go_next()
    }
  }
}

state day_discussion {
  index = 0
  while (index < names.length) && (!players[names[index]].life) index++;
  announce(me(T("speaking")(names[index])))

  event [msg, me] (u, cont) => {
    if (names[index] == u && cont.includes("/expo") && isWolf(players[u].role)) then {
      if players[u].role == rWing then {
        the = select(cont, names)
        if the.length then {
          if players[the].life then{
            victim = [u]
            if !victim.inclues(the) then victim.push(the)
            players[u].diefor = "expo"
            players[the].diefor = "bite"
            later 3500 going day_whitewolf
          } else drrr.print(me(T("deadMan")))
        } else drrr.print(me(T("noSuchPeople")))
      }
      else {
        players[u].diefor = "expo"
        players[u].life = false
        players[u].voting = false
        setAlive(u, false)
        if passJudge() < 0
        then later 3500 going night
        else later 3500 going game_over
      }
    }
    else if (names[index] == u && cont.includes("over"))
      || ((names.includes(u) || u == drrr.user.name) && cont.startsWith("/skip")) then {
      index++ // += bug?
      while (index < names.length) && (!players[names[index]].life) index++;
      if index >= names.length
      then later 3500 going day_vote
      else announce(me(T("speaking")(names[index])))
    }
  }
}

state day_vote {

  announce(me(T("voting")))
  vote = {}

  vote_times++
  survivor = filter(players, (p, idx) => p.life)


  later 1500 drrr.print(T("voteNote")(
    survivor.filter(u => u.right).map((u) => "@" + u.name).join("\n")))

  lock = false

  event [msg, me, dm] (user, cont: "^/vote\\s+\\S+|^/execute", url, tc, req) => {
    cont = cont.replace("/vote", "").trim()
    if user in players && !lock then {
      if players[user].right then {
        if cont.startsWith("/execute")
        then {
          lock = true
          later 1500 going day_count_vote
        }
        else if vote.hasOwnProperty(user)
        then drrr.print(T("oneVote"))
        else {
          the = select(cont, names)
          if the then {
            if players[the].right then {
              vote[user] = the

              if req.type == "dm"
              then drrr.dm(user, T("checkVote")(the))
              else drrr.print(T("checkVote")(the))

              if Object.keys(vote).length == filter(players, p => p.right).length
              then {
                lock = true
                later 3500 going day_count_vote
              }
            } else drrr.print(T("voteDead")(the))
          }
          else if cont.startsWith("no") then {
            vote[user] = "no"

            if req.type == "dm"
            then drrr.dm(user, T("abstain"))
            else drrr.print(T("abstain"))

            if Object.keys(vote).length == filter(players, p => p.right).length
            then {
              lock = true
              later 3500 going day_count_vote
            }
          } else drrr.print(T("noSuchPeople"))
        }
      } else drrr.print(T("noRight"))
    } else drrr.print(me(T("beQuiet")(user)))
  }
  event [msg, me, dm] (user, cont: "^/vote\\s*$", url, tc, req) => {
    if req.type == "dm"
    then drrr.dm(user, me(T("curVote")(Object.keys(vote).join(", "))))
    else drrr.print(me(T("curVote")(Object.keys(vote).join(", "))))
  }
  event [msg, me] (user, cont: "^/urge\\s*$") => {
    drrr.print(me(T("urgeVote")(survivor.filter(u => !(u.name in vote) && u.right).map((u) => "@" + u.name).join(", "))))
  }
}

state day_count_vote {
  drrr.print(Object.keys(vote).map(k => String(k) + " => " + String(vote[k])).join("\n"))
  setTimeout(() => going day_execute, 3000)
}

state day_whitewolf {

  expo = []

  go_next = {
    drrr.print(me(T("survivors")(filter(players, p => p.life).map(p => p.name).join(", "))))
    if passJudge() < 0
    then later 3500 going night
    else later 3500 going game_over
  }

  announce(me(T("died")(victim.map((x)=>"@" + x).join(", "))))

  later 2000 {

    exist_shooter = false
    victim.forEach((name, index) => {
      setTimeout(() => setAlive(name, false), index * 1500)
      if players[name].role == rHunt && players[name].diefor != "poison"
      then exist_shooter = true
    })

    if exist_shooter then {
      dead = victim
      visit shooter_ask
    }

    later 5000 {
      drrr.print(me(T("rip30s")))
      later 30000 {
        victim.forEach((name) => {
          players[name].life = false;
          players[name].right = false;
        })
        if expo.length
        then visit shooter_fire
        else go_next()
      }
    }
  }
}

state day_execute {

  expo = []

  go_next = {
    drrr.print(me(T("survivors")(filter(players, p => p.life).map(p => p.name).join(", "))))
    if passJudge() < 0
    then later 3500 going night
    else later 3500 going game_over
  }

  louis = most(Object.values(vote).filter((x) => x != "no"))

  if louis.length > 1 then {
    if vote_times == 1 then {
      announce(me(T("reVote")(louis.map((x) => "@" + x).join(", "))))
      going day_vote
    }
    else {
      vote_times = 0
      announce(me(T("noExecute")(louis.map((x) => "@" + x).join(", "))))
      go_next()
    }
  }
  else {
    vote_times = 0
    announce(me(T("execute")(louis.map((x) => "@" + x).join(", "))))

    exist_shooter = false
    exist_idiot = false
    louis.forEach((name) => {
      if players[name].role == rHunt
      then exist_shooter = true
      if players[name].role == rIdio
      then exist_idiot = true
    })

    louis.forEach((name, index) => {
      players[name].life = false;
      players[name].right = false;
      players[name].diefor = "vote";
      setTimeout(() => setAlive(name, players[name].life), (index + 1) * 1500)
    })

    // may setTimeout for idiot
    if exist_shooter then {
      dead = louis
      visit shooter_ask
    }

    if exist_idiot then {
      dead = louis
      visit idiot_ask
    }

    later ((louis.length + 2) * 1500) {
      drrr.print(me(T("rip30s")))
      later 30000 {
        if expo.length
        then visit shooter_fire
        else go_next()
      }
    }
  }
}

state game_over {
  cur_role = map(players, (p, idx) => p.name + ":" + p.rname + " " + (if p.life then T("alive") else (T("dead") + " (" + p.diefor + ")"))).join("\n")
  result = passJudge()
  if result == 0
  then scene(me(T("werewolvesWin")))
  else if result == 1
  then scene(me(T("peopleWin")))
  else scene(me(T("draw")))
  later 2000 drrr.print(cur_role)
}

werewolf = (lang) => {

  if lang then {
    language = lang
    announcement = me(T("notBeg"))
    initRoleName()
  }

  event [msg, me, dm] (user, cont: "^/r\\s*$") => {
    if user in players then {
      wolves = filter(players, (p, index) => isWolf(p.role)).map(p => p.name).join(", ")
      if !isWolf(players[user].role) then drrr.dm(user, T("UrRole")(players[user].rname), players[user].rUrl)
      else drrr.dm(user, T("UrWerewolf")(players[user].rname, wolves), players[user].rUrl)
    } else drrr.dm(user, T("notPlayer"))
  }

  event [msg, me, dm] (user, cont: "^/w\\s*$") => {
    if Object.keys(players).length
    then drrr.print(T("players")(map(players, (p, index) => String(index + 1) + ". " + p.name + " " + (if p.life then T("alive") else T("dead"))).join("\n")))
    else if names.length then
      drrr.print(T("players")(names.map((user, index) => String(index + 1) + ". " + user).join("\n")))
    else drrr.print(me(T("noPlayerBeg")))
  }

  event [msg, me, dm] (user, cont: "^/s\\s*$") => {
    drrr.print(announcement)
  }

  event [msg, me, dm] (user, cont: "^/help\\s*$") => {
    drrr.print(T("manual"))
  }

  event [msg, me] (user, cont: "^/game\\s*$") => going prepare

  event [msg, me] (user, cont: "^/next\\s*$") => later 1500 drrr.print("/me/skip")

  event join (user) => setPlayer(user, user == drrr.user.name)

  event [msg, me] (user, cont: "^/alive") => {
    if !names.length then drrr.print("/me start game first")
    else setAlive(select(cont, names), !cont.includes("false"))
  }

  event [msg, me] (user, cont: "^/player") => {
    if !names.length then drrr.print("/me start game first")
    else setPlayer(select(cont, names), !cont.includes("false"))
  }

  going prepare
}

console.log("need call werewolf(lang) to start it,\n\"zh\" and \"en\" are available now")

room = "AX72B5TYgL"

drrr = new Bot(__this__, "法官羅伯特", "kanra-2x")

if room.length then {
  if drrr.load() then
    drrr.join(room, () => {
      werewolf("zh");
    });
  else drrr.login(() => {
    drrr.save();
    drrr.join(room, () => {
      werewolf("zh");
    });
  })
}
else console.log("set room ID first")
