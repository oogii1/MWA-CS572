const fetch = require("node-fetch");

const fetchCity = fetch('https://api.myjson.com/bins/8p5wl');
const fetchMUM = fetch('https://api.myjson.com/bins/1eyxut');

Promise.all([fetchCity, fetchMUM]).then(data => data[1]).then(data => data.json()).then(data => console.log(data)).catch(err=>console.error(err));