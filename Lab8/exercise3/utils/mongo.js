const MongoClient = require('mongodb').MongoClient;
exports.exec = function (callback) {
    MongoClient.connect('mongodb://localhost:27017', function (err, client) {
        const db = client.db('lab9');
        callback(db, () => client.close());
    });
};