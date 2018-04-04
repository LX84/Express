var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/84', function(req, res, next) {
    res.send("hello lx!");
});

router.get('/lx',function(req,res,next){
    console.log("Accessing the lx section");
    var lx={
        name:"lx",
        age:16
    }
    res.json(lx);
});

router.get('/zx',function(req,res,next){
    res.render('test',{});
});

module.exports = router;