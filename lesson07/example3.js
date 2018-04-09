//In version 2.x of the MongoDB native NodeJS driver you would get the database object as an argument to the connect callback:
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/testDB', function(err, db) {

    if(err) throw err; 
	// Find one document in our collection with no query 	
    db.collection('testCol').findOne({}, function(err, doc) { 
		if(err) throw err; 
		// Print the result. 
		// Will print a null if there are no documents in the db. 			
        console.dir(doc); 

		// Close the DB 
		db.close(); 
	}); 

	// Declare success 
	console.dir("Called findOne!"); 
}); 
