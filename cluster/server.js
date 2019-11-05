const server = require('http');
const pid = process.pid;

server.createServer((req, res) => {
    for(let i=0; i<10; i++);
    res.end(`Handled by process ${pid}`);
}).listen(8080, () => console.log(`started process ${pid}`));

setTimeout(() => process.exit(1), Math.random()*1000);