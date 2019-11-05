/**
 * Three strategies of scaling - distributed systems
 * Cloning - fork()
 * Decomposition - micro-service
 * splitting - horizontal partitioning
 */

 /**
  * Four ways to create child process in NODE
  * spawn, fork, exec, execFile
  */


 const { spawn } = require('child_process');

 const child = spawn('pwd');

 child.on('exit', (code, signal) => {
     console.log(`exited with ${code} - ${signal}`);
 })

 child.stdout.on('data', data => console.log(`exited with stdout: ${data}`));

 child.stderr.on('data', data => console.log(`exited with stdout: ${data}`));

 //other events on child: disconnect, error, message, close