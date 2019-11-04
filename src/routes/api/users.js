import express from 'express';
import models from '../../models';
var router = express.Router();

router.get('/', function(req, res, next) {
  models.Users.findAll({}).then(users => {
    res.send(users);
  })
});

export default router;
