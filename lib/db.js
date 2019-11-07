var fs = require('fs');

function save(db, file = './db/db.json'){
	    let data = JSON.stringify(db);
	    fs.writeFileSync(file, data);
}

function load(db, file = './db/db.json'){
	    let newData = require('./' + file);
	    db = newData;
}

module.exports = {
	save: save,
	load: load
}
