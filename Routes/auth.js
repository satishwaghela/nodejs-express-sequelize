var sequelize = require('../Sequelize');

var express = require('express');
var router  = express.Router();

router.get('/login', function(req, res) {
  req.session.user = {};
  res.send({});
});

router.get('/logout', function(req, res) {
  delete req.session.user;
  res.clearCookie('user_sid');
  res.send({});
});

module.exports = router;