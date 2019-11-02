;
class Poker{
	constructor(suit = 0, num = 1){
		this.suit = suit;
		this.number = num;
	}
}

class PokerCards{
	constructor(){
		this.pool = [];
	}
	
	add(card){
		if(card instanceof Poker){
			this.pool.push(card);
			return 0;
		}else{
			return new Error('card must be Poker');
		}
	}

	remove(card){
		if(!(card instanceof Poker)){
			return new Error('card must be Poker');
		}else if(!this.pool.includes(card)){
			return new Error('card must in pool');
		}
	}
}
(function($){
	$.fn.pokerPrint = function(card, x, y){
		if(!(card instanceof Poker)){
			return this;
		}
		console.log(this);
		const ctx = this[0].getContext('2d');
		ctx.fillstyle = '#ffffff';
		
		ctx.fillRect(x, y, x+150, y+200);
		return this;
	}
})(jQuery);
console.log('poker loded');
