/* eslint-disable */

const http = require('http');

const options = {
    port: '8080',
    method: 'GET',
    path: '/index'
};

const req = http.request(options);
req.end();

req
    .on('response', res => {
        let l = 0;
        res
            .on('end', () => console.log('end, received', l))
            .on('data', chunk => {
                l += chunk.length;

                if (l > 2000) {
                    res.destroy();
                }
            });
    })
    .on('error', e => console.log('error', e));
