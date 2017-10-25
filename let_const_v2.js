let playlist = ['Back in Black','Highway to Hell','T.N.T'];

let currentTrack = playlist[0];

for (let i = 0; i<playlist.length; i++){
	//block scope
	let currentTrack = playlist[i];
	console.log(`Current: ${currentTrack}`);
}

console.log(`Featured track: ${currentTrack}`);

const name = 'John';

name = 'Mike';