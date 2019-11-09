var random = () => require('randombytes')(3).toString('hex').toUpperCase();

class Room{
	constructor(name){
		this.id = random();
		this.name = name || this.id;
		this.players = [];
	}
	addPlayer(player){ // player <-- player object
		if(player.id && player.name && player.ws) this.players.push(player);
		return this;
	}
	removePlayer(player){ // player <-- player object or name(begin with '%'), id(begin with '#') ws object
		if(typeof player === 'object'){
			
		}
		this.players = this.players.filter((item)=>item !== player);
		return this;
	}
	removePlayerById(id){
		this.players = this.players.filter((item)=>item.id !== id);
		return this;
	}
	removePlayerByName(name){
		this.players = this.players.filter((item)=>item.name !== name);
		return this;
	}
	removePlayerByWs(Ws){
		this.players = this.players.filter((item)=>item.ws !== ws);
		return this;
	}
}
