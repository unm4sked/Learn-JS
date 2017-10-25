let movies = {
	'pirates': {
		title: 'Pirates of the Caribbean',
		cast: []
	},
	'transformers': {
		title: 'transformers: The Last Knight',
		cast: []
	}
};

function setCast(name, ...actors) {
	actors.forEach((actor) => movies[name].cast.push(actor));
}

setCast('pirates','Johny Deep', 'Javier Bardem');
setCast('transformers','Mark Wahlberg','Anthony Hopkins');

console.log(movies);

let numbers = [9,3,4,5,2];
let minValue = Math.min(...numbers);
console.log(minValue);