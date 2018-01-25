var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var Minute = require('./api/models/minuteModel');



// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/minutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found.' })
});

var routes = require('./api/routes/minuteRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('mom RESTful api server started on: ' + port);