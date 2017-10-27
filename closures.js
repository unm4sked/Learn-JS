
function example(){
	const insideVar = "variable create in func.";
	const insideVar2 = "variable create in func.2";
	return [insideVar,insideVar2];
}

let outsideVar=example()[0];
let outsideVar2=example()[1];


console.log(outsideVar);
console.log(outsideVar2);

const userAge = 22;

const userInfo = () => {
	const userName = "John";
	return "Name: "+userName+", Age: "+userAge;
}

const newUser = userInfo();
console.log(newUser);

function hello(name){
	//let a = "aaa";
	return function(day){
		console.log(`Hi! ${name} ${day} `)
	}
}

const user = hello('Johny');
console.log(user);
console.log(user("Monday"));	
console.log(user("Friday"));

const add = function(a){
	let b = 10;
	return function(c){
		return a+b+c;
	}
}

const addTo20 = add(10);
console.log(addTo20);

console.log(addTo20(10));


function count_(start){
	let c = start;

	return function(){
		return ++c;
	}
}

const count = count_(0);
count();
count();
console.log(count());











