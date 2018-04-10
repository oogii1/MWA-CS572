const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    const db = client.db('lab8exercise1');
    const col = db.collection('restaurants');
    col.find({}).each(function (err, data) {
        console.dir(data);
        client.close();
    });
});