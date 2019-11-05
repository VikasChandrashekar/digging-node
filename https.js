const fs = require('fs');

const server = require('https').createServer({
    key: fs.readFileSync('extra/key.pm'),
    cert: fs.readFileSync('extra/cert.pm'),
});

server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello world!\n');
});

server.listen(443);