const http = require('http');
const fs = require('fs');
const cluster = require('cluster');
const os = require('os');
const url = require('url');
const path = require('path');
if (cluster.isMaster) {
    for (let cpu of os.cpus()) {
        cluster.fork();
    }
} else {
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

        let promise = new Promise(function (resolve, reject) {
            fs.exists(fullPath, function (exists) {
                if (exists) resolve();
                else reject();
            });
        });
        promise
            .catch(err => notFound(res, 'The file which you wanted is not found. Sorry!'))
            .then((data) => {
                let file = fs.createReadStream(fullPath);
                file.pipe(res);
                res.writeHead(200, 'OKaaaa');
            });
    }).listen(8080);
}

