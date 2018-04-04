var fs = require('fs');
var path = require('path');
var http = require('http').createServer(function (req, res) {
    var tmp = fs.createReadStream(path.join(__dirname, 'narnia_lion_aslan-wide.jpg'));
    tmp.pipe(res);
    tmp.close();
}).listen(8080, 'localhost');
