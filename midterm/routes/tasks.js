const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

router.get('/', function (req, res, next) {
    req.db.collection('tasks').find({ status: 'incomplete' }).toArray(function (err, data) {
        if (err) return next(err);
        // res.render('tasks');
        res.json(data);
    });
});

router.get('/completed', function (req, res, next) {
    req.db.collection('tasks').find({ status: 'complete' }).toArray(function (err, data) {
        if (err) return next(err);
        // res.render('tasks_completed');
        res.json(data);
    });
});

router.get('/add', function (req, res, next) {
    req.db.collection('tasks').insert({
        task: req.query.task,
        status: 'incomplete',
        created_date: new Date(),
        updated_date: new Date()
    }, function (err, data) {
        console.log(data);
        if (err) return next(err);
        res.end();
    });
});

router.get('/delete/:task_id', function (req, res, next) {
    req.db.collection('tasks').remove({
        _id: ObjectID(req.params.task_id)
    }, function (err, data) {
        console.log(data);
        if (err) return next(err);
        res.end();
    });
});

router.get('/check/:task_id', function (req, res, next) {
    req.db.collection('tasks').update({
        _id: ObjectID(req.params['task_id'])
    }, {
            status: 'complete'
        }, function (err, data) {
            console.log(data);
            if (err) return next(err);
            res.end();
        });
});

module.exports = router;