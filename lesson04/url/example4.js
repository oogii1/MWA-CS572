const querystring = require('querystring'); 

const res1 = querystring.stringify({ 
			name: 'Asaad Saad', 
			course: 'CS572 Modern Web Applications' 
			}) 
// 'name=Asaad%20Saad&course=CS572%20Modern%20Web%20Applications'
console.log(res1);

const res2 = querystring.parse('name=Asaad%20Saad&course=CS572%20Modern%20Web%20Applications');
console.log(res2);


const res3 = querystring.parse('courses=WAP&courses=MWA');
console.log(res3);