const { of } = require('rxjs');
const { reduce, scan } = require('rxjs/operators');

const observable = of(1, 2, 3, 4, 5);

observable.pipe(reduce((total, currentValue) => { return total + currentValue; }, 0))
    .subscribe((value) => console.log(value));

observable 
	.pipe(scan((total, currentValue) => { return total + currentValue; }, 0))
	.subscribe( (value) => console.log(value) );