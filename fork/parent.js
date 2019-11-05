const { fork } = require('child_process');

const forked = fork('child.js');

forked.on('message', msg => console.log(`Message from child:\n ${JSON.stringify(msg)}`));

forked.send({msg: "Hello World"});

