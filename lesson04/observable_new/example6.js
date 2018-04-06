const { Observable, Subject } = require('rxjs');

const myObservable = Observable.create(observer => {
    observer.next('CS572');
    setTimeout(() => observer.next('Best course ever!'), 1000); 
});

const subscription = myObservable.subscribe(value => console.log(value));



// subscription.unsubscribe();

var myObservable2 = new Subject();
myObservable2.subscribe(value => console.log(value));
myObservable2.subscribe(value => console.log(`This is the value: ${value}`)); 
myObservable2.next('CS472'); 
myObservable2.next('Best course ever!'); 