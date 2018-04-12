var express = require('express');
var router = express.Router();
const mongo = require('./../utils/mongo.js');

let model = {
  title: 'Welcome to the MongoCRUD application',
};

/* GET home page. */
router.get('/', function (req, res, next) {
  mongo.exec(function (db, close) {
    db.collection('locations').find({}).toArray(function (err, data) {
      model.locations = data;
      return res.render('index', model);
    });
  });
});

router.post('/', function (req, res, next) {
  req.assert('name', 'Name is required.').notEmpty();
  req.assert('category', 'Category is required.').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    model.errors = errors
    return res.render('index', model);
  }

  mongo.exec(function (db, close) {
    locations = db.collection('locations');
    locations.insert({ name: req.body.name, category: req.body.category, loc: [0, 0] }, function () {
      console.log(arguments);
      close();
      res.redirect('/');
    });
  });
});

module.exports = router;
