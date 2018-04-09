const mongo = require('mongodb');
mongo.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;
    const db = client.db('library');
    db.collection('books').insert({ _id: 'b1', ISBN: '123-4567', author: 'Oogii', title: 'My Book', tags: ['horror', 'novel'] });
    db.collection('students').insert({
        name: 'st1', 
        email: 'st1@mum.edu',
        phone: '99999999',
        borrowedBooks: [{
            returnDate: '12/31/2018',
            book: 'b1'
        }]
    });
    client.close();
});
