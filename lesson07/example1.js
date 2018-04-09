const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'testDB';

MongoClient.connect(url, function(err, client){
    assert.equal(null, err);

    console.log('Connected successfully to server....');
    const db = client.db(dbName);
    db.collection('testRow').findOne({}, function(err, doc){
        if(err) throw err;
        console.dir(doc);
        // console.log(doc);
        
    });

    client.close();
});