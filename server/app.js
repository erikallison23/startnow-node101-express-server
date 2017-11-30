// import files and packages up here
//declaring the json file as data
var data = require('./data.json');

// create your express server below
//variable express requests express
var express = require('express');
//var morgan requests morgan
var morgan = require('morgan');
//var app will run express when app is called
var app = express();

// add your routes and middleware below
//uses morgan when server is run
app.use(morgan('dev'));
app.get('/', function(req, res){
    console.log(req.params);
    console.log(req.query);
    res.status(200).send('easy');
});
//uses express when server is run
app.get('/data', function(req, res){
    res.status(200).send(data);
});
// finally export the express application
module.exports = app;
