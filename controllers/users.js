var express = require('express');
var User = require('../models/user');
var router = express.Router();
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var secret = process.env.JWT_SECRET;


router.route('/')
  .get(function(req, res) {
    console.log('getting');
    User.find(function(err, users) {
      if (err) return res.status(500).send(err);

      return res.send(users);
    });
  })
  .post(function(req, res) {
    // find the user first in case the email already exists
    User.findOne({ email: req.body.email }, function(err, user) {
      if (user) return res.status(400).send({ message: 'Username already exists' });
      User.create(req.body, function(err, user) {
        if (err) return res.status(500).send(err);
        console.log('CREATED USER HERE')
        var token = jwt.sign(user.toJSON(), secret);
        return res.send({ user: user, token: token });
      });
    });
  });

router.route('/:id')
  .put(function(req,res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .get(function(req, res) {
    User.findById(req.params.id, function(err, user) {
      if (err) return res.status(500).send(err);
      return res.send(user);
    });
  })
  .delete(function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;
