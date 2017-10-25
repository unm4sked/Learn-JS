//global scope
function foo(){
	//function scope
	var number = 1;
}

//global scope
//console.log(number);

let foo1 = 5,
	bar = 5;


if (foo1 === bar ) {
	//block scope
}

//----------------------------

var playlist = ['Back in Black','Highway to Hell','T.N.T'];

var currentTrack = playlist[0];

for (var i = 0; i<playlist.length; i++){
	var currentTrack = playlist[i];
	console.log(`Current: ${currentTrack}`);
}

console.log(`Featured track: ${currentTrack}`);


