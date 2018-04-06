const fs = require('fs');

const sendMessage = function (type, data) {
    process.send(JSON.stringify({ type: type, data: data }));
};
process.on('message', (fullPath) => {
    let promise = new Promise(function (resolve, reject) {
        fs.exists(fullPath, function (exists) {
            if (exists) resolve();
            else reject('The file which you wanted is not found. Sorry!');
        });
    });
    promise
        .then((data) => {
            let file = fs.createReadStream(fullPath, { encoding: 'utf8' });
            file.on('data', function (data) {
                sendMessage('processing', data);
            }).on('end', function () {
                sendMessage('processed');
            });
        })
        .catch(err => sendMessage('error', err));
});
