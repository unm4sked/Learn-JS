let playlist = ["Despacito - Remix", " Im the one", "Shape of you","Swalla"];

//playlist.forEach((track,index)=> console.log(`${index}:${track}`));

let lowerTracks = playlist.map((track, index) => track.toLowerCase());
let filteredTrack = playlist.filter((track, index) => index < 3);
let charCount = playlist.reduce((count,track) => count+= track.length, 0);


console.log(lowerTracks);
console.log(filteredTrack);
console.log(charCount);