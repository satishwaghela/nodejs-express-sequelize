var express = require('express');
const App = require('../app.js');

var indexRouter  = express.Router();
const auth = require('./auth.js');
const users = require('./users.js');

const baseUrl = '/service';

indexRouter.get('/', function(req, res) {
  res.send('Hello!!!');
});

//--<Routes

App.use(baseUrl+'/', indexRouter);
App.use(baseUrl+'/users', users);
App.use(baseUrl+'/auth', auth);

//--Routes>

// catch 404 and forward to error handler
App.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
App.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.end();
});
