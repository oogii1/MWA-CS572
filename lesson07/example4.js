var mongo = require('mongoskin');

var db = mongo.db("mongodb://localhost:27017/testDB", {native_parser:true});
db.bind('testCol');
db.testCol.find().toArray(function(err, items) {
    console.log(items);
        db.close();
});