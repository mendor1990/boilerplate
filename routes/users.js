var express = require('express');
var User = require('../models/user');
var router = express.Router();

router.get('/register', function(req, res, next) {

  res.render('users/register');
});

router.post('/register', function(req, res, next) {

  if(req.body && req.body.data) {

    User.create(req.body.data, function(err){

      if(err)throw new Error(err.message);
    });
  }
});

module.exports = router;
