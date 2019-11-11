var express = require('express');
var router = express.Router();
var {roomPool, Room} = require('../../class/Game.js');

router.get('/', function(req, res, next) {
  res.render('default', { title: 'API', message: 'Home page of api' });
});

router.get('/getNewId', function(req, res, next){
	var id = {id: Math.floor(Math.random() * 1000)};
	res.send(id);
});

router.get('/create/room/:name', function(req, res, next){
	var room = new Room(req.params.name)
	roomPool.push(room);
	res.send(room.id);
});

router.get('/lsRoom', function(req, res, next){
	res.send(roomPool);
});

module.exports = router;
