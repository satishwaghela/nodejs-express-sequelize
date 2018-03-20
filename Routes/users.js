var sequelize = require('../Sequelize');

var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  sequelize.models.users.findAll({raw: true}).then(users => {
    res.send(users);
  });
});

router.get('/:user_id', function(req, res) {
  sequelize.models.users.findById(req.params.user_id).then(users => {
    if(users != null){
      res.send(users);
    }else{
      throw new Error('User does not exist');
    }
  }).catch((err) =>{
    res.status(404);
    res.send({error: err.message});
  });
});

module.exports = router;