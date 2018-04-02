var express = require('express');
var router = express.Router();

/* GET users listing. */
//127.0.0.1:3000/users/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//127.0.0.1:3000/users/lx
router.get('/lx',function (req,res,next) {
  res.send("hello lixiang!");

})

module.exports = router;
