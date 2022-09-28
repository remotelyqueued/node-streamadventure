// works
// const http = require('http');
// const port = process.argv[2];

// http.createServer((request, response) => {
//     let data = '';
//     if (request.method !== 'POST') {
//         return response.end('Not a post\n');
//     }
//     request.on('data', chunk => (data += chunk));
//     request.on('end', () => response.end(data.toString().toUpperCase()));
//     // request.pipe(response); // works as echo
// }).listen(port);

// official solution
const http = require('http');
const through = require('through2');
const server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(
            through(function (buf, _, next) {
                this.push(buf.toString().toUpperCase());
                next();
            })
        ).pipe(res);
    } else res.end('send me a POST\n');
});
server.listen(parseInt(process.argv[2]));
