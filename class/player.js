var random = () => require('randombytes')(3).toString('hex').toUpperCase();

class Player{
	constructor(ws, name){
		if(ws && name){
			this.id = random();
			this.name = name || this.id;
			this.ws = ws;
		}else{
			return new Error('Miss some argements');
		}
	}
}

module.exports = Player;
