const http = require('http');
http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'application/json'});
    let obj = {city: 'fairfield', state: 'IA'};
    res.end(JSON.stringify(obj));
}).listen(8888, ()=>{console.log("listen to 8888")});