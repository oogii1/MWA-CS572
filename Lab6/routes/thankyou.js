var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var email = req.session['sda'];
  res.render('thankyou', { title: 'Thank you', email: email });
});

module.exports = router;
