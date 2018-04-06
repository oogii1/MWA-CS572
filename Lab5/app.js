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
        const promise = fetch('http://jsonplaceholder.typicode.com/users/');
        promise
            .then(res => res.json())
            .then(json => subject.next(json));
    };
    sendReq(subject);
});

app.listen(app.get('port1'), () => { console.log(`Listening ${app.get('port1')}`) });
