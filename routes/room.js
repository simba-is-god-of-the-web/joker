var express = require('express');
var router = express.Router();
var log = require('../lib/log.js');

/* GET room page. */
router.get('/', function(req, res, next) {
	res.render('room', { username: req.query.un, id: req.query.uid});
});

module.exports = router;
