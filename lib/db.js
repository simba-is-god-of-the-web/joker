function getTime(hourZone = 8){
	let time = new Date();
	return [
		time.getUTCFullYear(), 
		time.getUTCMonth() + 1, 
		time.getUTCDate(),
		time.getUTCDay(),
		time.getUTCHours() + hourZone,
		time.getUTCMinutes(),
		time.getUTCSeconds()
	].join('-');
}

class DB{
	constructor(setup){
		this.db = setup.db || [];
		this.format = setup.format || {};
		this.name = setup.name || 'memory';
		this.index = setup.index || 'id';
	}
	insert(data = {}){
		var flag = true;
		for(var i in data){
			if(typeof data[i] !== typeof this.format[i]){
				flag = false;
			}
		}
		if(flag){
			this.db.push({...data});
			return this;
		}else{
			return new Error('format error');
		}
	}
	select(n = ''){
		if(!n)	return new Error('n is required');
		if(!this.index)	return new Error('please set db.index');
		return this.db.filter((item) => item[this.index] === n);
	}
	remove(n = ''){
		if(!n)			return new Error('n is required');
		if(!this.index)	return new Error('please set db.index');
		this.db = this.db.filter((item) => item[this.index] !== n);
		return;
		
	}
	save(file){

	}
}

var user = new DB({
	name: 'user',
	format: {
		name: '',
		id: 0
	},
	index: 'name'
});
user.insert({name: 'simba', id: 7122});
user.insert({name: 'simba', id: 12});
user.insert({name: 'jasper', id: 7122});
user.insert({name: 'justin', id: 7122});
user.insert({name: 'raccoon', id: 7122});
console.table(user.db);
console.table(user.select('simba'));
user.remove('simba');
console.table(user.db);

