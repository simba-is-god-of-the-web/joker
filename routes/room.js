var express = require('express');
var router = express.Router();

/* GET room page. */
router.get('/', function(req, res, next) {
  res.render('room', { username: 'JustinChen', id: 7122});
});

module.exports = router;
