var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var userdb = new sqlite3.Database('./db/user.db', function(e){
	if(e){
		console.error(e);
	}else{
		userdb.run("CREATE TABLE IF NOT EXISTS  user (username TEXT, uid INT)");
	}
});


/* GET room page. */
router.get('/', function(req, res, next) {
	userdb.serialize(function(){
		userdb.each('SELECT username AS uid, username FROM user', function(e, username){
			console.log(username);
		});
		userdb.run(`INSERT INTO user VALUES ('${req.query.un}', ${req.query.uid})`);
		res.render('room', { username: req.query.un, id: req.query.uid});
	});
});

module.exports = router;
