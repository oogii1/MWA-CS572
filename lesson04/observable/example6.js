const Rx = require('@reactivex/rxjs');

//Internally produce new events 
var myObservable = Rx.Observable.create(observer => { 
		observer.next('CS572'); 
		setTimeout(() => observer.next('Best course ever!'), 1000); 
}); 
myObservable.subscribe(value => console.log(value));


// Externally produce new events 
var myObservable = new Rx.Subject();
myObservable.subscribe(value => console.log(value)); 
myObservable.next('CS472'); 
