var express = require('express');
// var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
// var passport = require('./config/ppConfig');
// var flash = require('connect-flash');
var mongoose = require('mongoose');
var app = express();
// var http = require('http').Server(app);

var path = require('path');

//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/doggywalk');
mongoose.connect('mongodb://localhost/doggywalk');

app.use(require('morgan')('dev'));
app.set('view engine', 'ejs');

// decode POST data in JSON and URL encoded formats
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(ejsLayouts);
app.use(express.static(__dirname + '/public/'));

// app.use(flash());


// Routes
app.use('/api', require('./controllers/api/appointment/'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
})


var server = app.listen(process.env.PORT || 3000);

module.exports = server;
