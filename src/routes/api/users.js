import express from 'express';
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({ firstName: 'Satish', lastName: 'Waghela' });
});

export default router;
