
function add(x,y){
	return x + y;
}

function sub(x,y){
	return x-y;
}


function calc(a,b,callback){
	console.log(`wprowadzone zostaly warosci:  ${a} i ${b}`);
	return callback(a,b);
}

//const wynik = calc(10,20,add);

//print(wynik);
//print(sub(4,2));

function print(a){
	console.log(a);
}

function showSth(x,callback){
	callback(x);
}

//showSth("aaaaaa",print);


// setInterval(function(){
// 	console.log("cos")
// }, 100);


const wiek = [4,3,5,2,1,21];
//wiek.sort();
console.log(wiek.sort(function(a,b){return  a-b}));


const miasta = ['warszawa','Łódź','kRakow'];
const cityUpper = miasta.map((city) => {return city.toUpperCase()});
print(cityUpper);