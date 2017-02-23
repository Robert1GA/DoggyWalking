require('dotenv').config();
var express = require('express');
// var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
// var passport = require('./config/ppConfig');
var flash = require('connect-flash');

//**** JSON web token dependencies, including a secret key to sign the token *****
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var secret = process.env.JWT_SECRET;
var app = express();
app.use(require('morgan')('dev'));
// app.use(flash());
// var http = require('http').Server(app);
// app.set('view engine', 'ejs');

var path = require('path');

// ***** mongoose models and connection *****
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/doggywalk');
var User = require('./models/user');




// decode POST data in JSON and URL encoded formats //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public/'));


// AUTH HERE
app.use('/users', require('./controllers/users'));

app.use('/api/users', expressJWT({secret: secret}).unless({
  path: [{ url: '/api/users', methods: ['POST'] }]
}), require('./controllers/users'));

app.use(function (err, req, res, next) {  // middleware to check if expressJWT authorized the user
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({ message: 'You need an authorization token to view this information.' });
  }
});
// POST /api/auth - if authenticated, return a signed JWT
app.post('/api/auth', function(req, res) {
  User.findOne({ name: req.body.email }, function(err, user) {
    // return 401 if error or no user
    if (err || !user) return res.status(401).send({ message: 'User not found' });

    // attempt to authenticate a user
    var isAuthenticated = user.authenticated(req.body.password);
    // return 401 if invalid password or error
    if (err || !isAuthenticated) return res.status(401).send({ message: 'User not authenticated' });

    // sign the JWT with the user payload and secret, then return
    var token = jwt.sign(user.toJSON(), secret);

    return res.send({ user: user, token: token });
  });
});


// Routes
app.use('/api', require('./controllers'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
