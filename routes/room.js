var express = require('express');
var router = express.Router();
var {roonPool} = require('../class/Game.js');

/* GET room page. */
router.get('/:room/:uid', function(req, res, next) {
	var room = roomPool.find((item) => item.id === req.params.room)
	if(room){
		var player = room.players.find((item) => item.id === req.params.uid);
		res.render('room', { username: player.name, id: player.id});
	}else{
		res.render('error', {message: 'Room not found', error: {status: 404}});
	}
});

module.exports = router;
