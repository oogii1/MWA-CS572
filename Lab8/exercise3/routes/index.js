var express = require('express');
var router = express.Router();
const mongo = require('./../utils/mongo.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  let model = { title: 'Welcome to the MongoCRUD application' };

  mongo.exec(function (db, close) {
    locations = db.collection('locations');
    locations.insert({ name: 'test', category: 'test', loc: [50, 60] }, function () {
      console.log(arguments);
      close();
      res.render('index', model);
    });
  });
});

module.exports = router;
