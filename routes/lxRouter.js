var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/84', function(req, res, next) {
    res.send("hello lx!");
});

module.exports = router;