function Media(type, name, author){
	this.type=type;
	this.name=name;
	this.author=author;
}
Media.prototype.getFullName = function(){
	return `${this.name} (${this.author})`;
};

function Song(name,author){
	Media.call(this,'song',name,author);
}

Song.prototype = Object.create(Media.prototype);

const mySong = new Song('Arrival to Earth', 'Steve Jablonsy');
console.log(mySong.getFullName());

const myBook = new Media('book','Way of the...','Dan Millman');
console.log(myBook.getFullName());

//----------------------------


class MediaES6{
	constructor(type, name, author){
		this.type=type;
		this.name=name;
		this.author=author;
	}
}

class SongES6 extends Media {
	constructor(name, author){
		super('song',name,author);
	}
}

const song = new SongES6('Arrival to Earth', 'Steve Jablonsy');
console.log(song.getFullName());