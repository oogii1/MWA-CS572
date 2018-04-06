const http = require('http');
http.createServer((req, res) => {
    res.end('Hello from nodemon!!!!!!!!!!!!!');
}).listen(8000, function () {
    console.log('Listen to 8000....');
});
