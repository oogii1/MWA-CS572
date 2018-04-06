const Rx = require('@reactivex/rxjs');

var source = Rx.Observable.interval(100).take(10) 
	.map(x => Rx.Observable.of("a", "b", "c"))
	.mergeAll(); 

source.subscribe(x => console.log(x));


var source = Rx.Observable.interval(100).take(10) 
	.flatMap(x => Rx.Observable.of(1,2,3))

source.subscribe(x => console.log(x));
