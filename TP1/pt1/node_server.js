const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;
const url = require('url');

const server = http.createServer((req, res) => {
    const param = url.parse(req.url, true).query;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello name:' + param.name);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});