const fs = require('fs')
const repl = require('repl');
const LS = require('./LambdaScript')
const {Bot, listen} = require('./bot')

global.Bot = Bot
global.listen = listen

function evaluate(cmd, context, filename, callback) {
  globalThis.machine = LS.Main.interact(globalThis.machine)(cmd)()
  callback(null, globalThis.machine);
}

let args = process.argv.slice(2);
if(!args.length){
  globalThis.machine = LS.Main.newMachine();
  repl.start({ prompt: '> ', eval: evaluate });
}
else{
  args.forEach(fn => {
    fs.readFile(fn, 'utf8' , (err, code) => {
      if (err) {
        console.error(err)
        return
      }
      globalThis.machine = LS.Main.newMachine();
      globalThis.machine = LS.Main.execute(code)();
    })
  });
}
