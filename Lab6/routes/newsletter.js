var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('newsletter', { title: 'THIS IS TITLE' });
});
router.post('/', function (req, res, next) {
  res.locals.email = '';
  res.locals.title = 'THIS IS TITLE123';
  req.assert('email', 'A valid email is required!!!!').notEmpty().isEmail();
  var invalid = req.validationErrors();
  if (invalid) {
    return res.render('newsletter', { email: req.body.email, errors: invalid });
  }
  fs.appendFile('subscribers.txt', `${req.body.email}\r\n`);
  return next();
});
router.post('/', function (req, res, next) {
  req.session.sda = req.body.email;
  res.redirect('/thankyou');
});
module.exports = router;
