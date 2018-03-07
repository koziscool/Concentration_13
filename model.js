
matcherModel = {
	size: 4,
	cardValues = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ],
	totalCards: 0,
	currentId: 1,

	init: function(size){
		this.size = size || this.size;
		var numPairs = Math.pow(this.size, 2) / 2;
		for( var i  = 0; i < numPairs; i++) this.addPair();
		this.shuffle();
	},

	addPair: function(){
		var value = this.randomValue();
		this.cards.push( this.getId(), value );
		this.cards.push( this.getId(), value );
		this.totalCards += 2;
	},

	getId: function(){
		var id = this.currentId;
		this.currentId++;
		return id;
	},

	shuffle: function(){
		var currentIndex = this.cards.length, temp, rand;
		while( currentIndex > 0 ){
			rand = Math.floor( currentIndex * Math.random());
			currentIndex--;
			temp = this.cards[currentIndex];
			this.cards[currentIndex] = this.cards[rand];
			this.cards[rand] = temp;
		}
	},

}