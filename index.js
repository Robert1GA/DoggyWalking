var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
// var passport = require('./config/ppConfig');
var flash = require('connect-flash');
var app = express();
var mongoose = require('mongoose');

app.use(require('morgan')('dev'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public/'));

app.use(flash());

app.get('/', function(req, res) {
  res.render('index');
});


var server = app.listen(process.env.PORT || 3000);

module.exports = server;
