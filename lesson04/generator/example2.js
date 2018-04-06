function* gen() { 
	yield `CS572`; 
	yield `is`; 
	yield `the`; 
	yield `best`; 
	yield `course`; 
	yield `ever!`; 
} 
const generate = gen(); 

for (const word of generate) { // "for of" will implicitly call next()
	console.log(word); 
}
