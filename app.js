var express = require('express');

var App = express();

var session = require('express-session');
var cookieParser = require('cookie-parser');

App.use(cookieParser());

App.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000,
    HttpOnly: true
    // secure: true
  }
}));
//--<Check Session
App.use(function(req, res, next) {
  if(req.url == '/service/auth/login'){
    next();
  } else if (!req.cookies.user_sid || !req.session.user) {
    res.status(403);
    res.send({
      error: 'forbidden'
    });
  } else {
    next();
  }
});
//--Check Session>

module.exports = App;