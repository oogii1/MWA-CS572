var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
const mongo = require('mongodb');
const crypto = require('crypto');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/secret', function (req, res) {
  mongo.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;
    const db = client.db('library');
    db.collection('homework7').findOne({}, (err, doc) => {
      client.close();
      const decipher = crypto.createDecipher('aes256', 'asaadsaad');
      let dec = decipher.update(doc.message, 'hex', 'utf8');
      dec += decipher.final('utf8');
      res.render('secret', { title: 'sEcReT_PaGe', message: dec });
    });
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
