var DB = require('./lib/db.js');
var roomDB = new DB({
	name: 'room',
	index: 'id',
	format: {
		id: 0,
		player: [],
		table: []
	}
});
module.export = roomDB;
