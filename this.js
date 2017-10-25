'use strict';

function welcome(){
	console.log(`Hello ${this.name}`);
}

let users = [
	{name: 'Adam'},
	{name: 'Mike'}
];


users.forEach(users => welcome.call(users));



let article = {title: 'This keyword'};

function fetchData(){
	console.log(this.title);
}

//Cal
fetchData.call(article);

//Apply
fetchData.apply(article);

//Bind
let bound = fetchData.bind(article);
bound();

class Article {
	constructor(title){
		this.title = title;
	}
	getTitle(){
		console.log(this);
	}
}

let book = new Article('The Witcher');
book.getTitle();