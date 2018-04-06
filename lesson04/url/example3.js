const url = require('url');

const urlObject = { 
	protocol: 'http', 
	host: 'www.mum.edu', 
	search: '?q=CS572', 
	pathname: '/search', }; 

console.log( url.format(urlObject) ); 