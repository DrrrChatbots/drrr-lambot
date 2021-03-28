# drrr-lambot

NodeJS bot powered by Lambda Script

```
Usage: node main.js [OPTION]... [LambdaScript]...

OPTION:

-h, --help                       Show the manual

-i, --interact, --repl           Enable repl mode

-j, --js      [JavaScript...]    Load JavaScript to context

-l, --ls, --  [LambdaScript ...] Load LambdaScripts in a machine

REPL:

In REPL mode, you will be given a REPL in LambdaScript in first machine.
(if no script be loaded, it will "new" a machine for you.)

You can check machines by variable "machines",
And change current REPL machine by "global.replmidx = [machine index]"

Examples:

$ # Run it interatively
$ node main.js

$ # Run the script
$ node main.js script/werewolf.js

$ # Run scripts with different machines and enable repl
$ node main.js -i script/werewolf.js -- script/werewolf.js
```
