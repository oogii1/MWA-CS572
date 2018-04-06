const url = require('url'); 
const myURL = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string&course=MWA#hash', true); 

console.log(myURL);