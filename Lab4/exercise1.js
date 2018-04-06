const http = require('http');
const url = require('url');
const path = require('path');
const { fork } = require('child_process');
const notFound = function (res, str = 'NOOOOT FOOOOUUUUNDDDD!!!!!') {
    res.writeHead(404, 'Not found!!!!');
    res.write(str);
    res.end();
};

http.createServer((req, res) => {
    let currentUrl = url.parse(req.url, true);
    if (!currentUrl.query.url) return notFound(res);
    const filePath = currentUrl.query.url;
    const fullPath = path.join(__dirname, filePath);

    const childProcess = fork('exercise1FileReader.js');
    let fileContent = '';
    childProcess.on('message', function (message) {
        const { type, data } = JSON.parse(message);
        if (type === 'processing') {
            fileContent += data;
        } else if (type === 'processed') {
            res.writeHead(200, 'OKla');
            res.write(fileContent, 'utf8');
            res.end();
        } else if (type === 'error') {
            res.writeHead(500, '___INTERNAL SERVER ERROR!!!!!___');
            res.write(data, 'utf8');
            res.end();
        }
    });
    childProcess.send(fullPath);

}).listen(8080);