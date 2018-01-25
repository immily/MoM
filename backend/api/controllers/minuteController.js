'use strict';

var mongoose = require('mongoose');

var Minute = mongoose.model('Minutes');

exports.list_all_minutes = function (req, res) {
    Minute.find({}, function (err, minute) {
        if (err)
            res.send(err);
        res.send(minute);
    })
};


exports.create_a_minute = function (req, res) {
    var new_minute = new Minute(req.body);
    new_minute.save(function (err, minute) {
        if (err)
            res.send(err);
        res.send(minute);
    })
};

exports.read_a_minute = function (req, res) {
    Minute.findById(req.params.minuteId, function (err, minute) {
        if (err)
            res.send(err);
        res.json(minute);
    });
};

exports.update_a_minute = function (req, res) {
    Minute.findOneAndUpdate({ _id: req.params.minuteId }, req.body, { new: true }, function (err, minute) {
        if (err)
            res.send(err);
        res.json(minute);
    });
};

exports.delete_a_minute = function (req, res) {
    Minute.remove({
        _id: req.params.minuteId
    }, function (err, minute) {
        if (err)
            res.send(err);
        res.json({ message: 'Minute of Meething successfully deleted.'});
    });
};
