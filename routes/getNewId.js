var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var id = {id: Math.floor(Math.random() * 1000)};
	res.send(id);
});

module.exports = router;
