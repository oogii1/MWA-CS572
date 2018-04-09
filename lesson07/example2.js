//According to the changelog for 3.0 you now get a client object containing the database object instead:
//The close() method has also been moved to the client. The code in the question can therefore be translated to:

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost";

MongoClient.connect(url, (err, client) => {
    if(err) throw err;
    
    const db = client.db('testDB');

    db.collection('testCol').findOne({}, function(err, doc){
        if(err) throw err;
        console.dir(doc);
        // console.log(doc);
        
    });
    client.close();
    console.dir("Called findOne!"); 
});