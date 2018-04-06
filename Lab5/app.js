const express = require('express')
    , path = require('path')
    , fetch = require('node-fetch')
    , Rx = require('@reactivex/rxjs')
    , app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.enable('case sensitive routing');
app.set('env', 'development');
// app.enable('view cache');
app.set('port1', 8080);

app.get('/', function (req, res) {
    res.render('index', { hello: 'EJS & EXPRESS', title: 'JOY' });
});
app.get('/users', function (req, res) {
    const subject = new Rx.Subject();
    subject.subscribe(users => {
        res.render('users', { title: 'USERS - list', users: users });
    });
    const sendReq = async function (subject) {
        fetch('http://jsonplaceholder.typicode.com/users/')
            .then(res => res.json())
            .then(json => subject.next(json));
    };
    sendReq(subject);
});
app.get('/users1', function (req, res) {
    fetch('http://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .then(users => res.render('users', { title: 'USERS1 - list', users: users }));
});
app.get('/users2', function (req, res) {
    const ob = Rx.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/users/').then(res => res.json()));
    ob.subscribe(users => res.render('users', { title: 'USERS1 - list', users: users }));
});
app.get('/users3', function (req, res) {
    Rx.Observable.create(function (ob) {
        fetch('http://jsonplaceholder.typicode.com/users/')
            .then(res => res.json())
            .then(users => ob.next(users));
    }).subscribe(users => {
        res.render('users', { title: 'USERS1 - list', users: users });
    });
});

app.listen(app.get('port1'), () => { console.log(`Listening ${app.get('port1')}`) });
