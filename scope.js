var a = "gloabl variable";

function one(){
	var a = "local variable";
	console.log(a);
}

one();

console.log(a);

console.log('----------------');


var b = "none";

if(true){
	var b = "nono";
}

console.log(b);

console.log('----------------');

let c = "none";

if(true){
	let c = "nono";
}

console.log(c);

console.log('----------------');

var x = "0";
function one(){
	//var x = "1";
	console.log("One: "+x);

	function two(){
		var x = "2";
		console.log("Two: "+x);

		function three(){
			var x = "3";
			console.log("Three: "+x);
		}
		three();
	}
	two();
}
one();

console.log("Global variable: "+x);
