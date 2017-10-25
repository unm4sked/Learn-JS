'use strict';

let tvShows = [{name: 'Game of Thrones'},{name: 'House of Cards'}, {name: 'Supernatural'}];

let fetchTvShows = new Promise((resolve,reject) => {
	let rand = Math.floor(Math.random()*2);

	rand ? resolve(tvShows) : reject ({status: 'error',message: 'Oops!'});
});

fetchTvShows.then(getFavorite).then(resolved).catch(rejected);

function getFavorite(response){
	return response[2];
}

function resolved(response){
	console.log(response);
}

function rejected(reason){
	console.log(reason);
}