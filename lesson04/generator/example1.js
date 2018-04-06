function* giveMeNumbers() { 
	let i = 0; 
	yield i; 
	i++; 
	yield i; 
	i++; 
	yield i; 
} 
const myNumbersGenerator = giveMeNumbers(); 

console.log(myNumbersGenerator.next());
console.log(myNumbersGenerator.next());
console.log(myNumbersGenerator.next());
console.log(myNumbersGenerator.next());