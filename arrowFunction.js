function Playlist(name){
	this.name=name;
}

Playlist.prototype.play = function (songs) {
	//console.log(this.name); 
	return songs.map(function (song) => { 
		//console.log(this); //global object - window
		return "PLaying: "+this.name + ' - ' + song.title;

	});
};

let myPlaylist = new Playlist('Europe');
console.log(myPlaylist.play([{title: 'Carrie'},{title: 'Final countdown'}]));