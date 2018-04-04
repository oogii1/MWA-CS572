var zlib = require('zlib');
var fs = require('fs');
var path = require('path');

var gzip = zlib.createGzip();
var gunzip = zlib.createGunzip();

var fileName = 'narnia_lion_aslan-wide.jpg';

var src = fs.createReadStream(path.join(__dirname, fileName));
var dst = fs.createWriteStream(path.join(__dirname, `${fileName}.gz`));

src.pipe(gzip).pipe(dst);
dst.on('finish', function () {
    src.close();
    dst.close();

    src = fs.createReadStream(path.join(__dirname, `${fileName}.gz`));
    dst = fs.createWriteStream(path.join(__dirname, `${fileName}.gunz.jpg`));

    src.pipe(gunzip).pipe(dst);
    dst.on('finish', function () {
        src.close();
        dst.close();
    });
});
