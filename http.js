const server = require('http').createServer();

// server.on('request', (req, res) => {
//     res.writeHead(200, { 'content-type': 'text/plain' });
//     res.end('Hello world\n');
// });

server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('Hello world?\n');

    setTimeout(()=>{
        res.write('Are you still there?\n');
    }, 10000);

    setTimeout(()=>{
        res.write('Sorry to keep you waiting :(\n');
    }, 20000);

    setTimeout(()=>{
        res.end('Bye!\n');
    }, 30000)
});

server.timeout = 15000;
server.listen(8000);