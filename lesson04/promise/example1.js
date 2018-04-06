const fetch = require('node-fetch');

const getPromise = fetch('http://localhost:8888');

// getPromise.then(data => data.json()).then(data => console.log(data));

getPromise.then(data => console.log(data));


// const fetch = require("node-fetch");
// const url =
//   "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
// fetch(url).then(res => res.json()).then(data => console.log(data));