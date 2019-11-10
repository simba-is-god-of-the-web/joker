var express = require('express');
// const {wsrouter} = require("../wsprocesser");
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ws', {});
});

module.exports = router;
