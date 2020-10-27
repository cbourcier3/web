const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;
const file = "simple1.html";
content ="";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(file, 'utf8', (error,data) => {
        content = data;
    });
    res.end(content);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});