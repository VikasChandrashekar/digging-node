const http = require('http');

const req = http.request(
    {
        hostname: 'www.google.com'
    },
    res => {
        console.log(res.statusCode);
        console.log(res.headers);

        let resData;
        res.on('data', data => {
            resData += data.toString();
        })

        res.on('end',()=> {
            console.log(resData);
        })
    }
);

req.on('error', e => console.log(e));

req.end();