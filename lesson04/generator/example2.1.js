const courses = [ 
	{ course: 'WAP', prof: 'Tina', code: 'CS472' }, 
	{ course: 'MWA', prof: 'Asaad Saad', code: 'CS572' }, 
	{ course: 'WAA', prof: 'Rakesh', code: 'CS545' }, 
]; 

function* loop(arr) { 
	console.log('Start');
	for (const item of arr) { // will be looped in steps 
		yield item; 
	} 
	console.log('End');
} 

const courseGen = loop(courses); 
const v1 = courseGen.next();
console.log(v1);

const v2 = courseGen.next();
console.log(v2);

const v3 = courseGen.next();
console.log(v3);

const v4 = courseGen.next();
console.log(v4);
