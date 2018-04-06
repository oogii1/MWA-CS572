/**
 * https://github.com/reactivex/rxjs
 */
const { Observable } = require('rxjs');

/*
  Create an observable that emits 'CS572' on  
  subscription.
*/
const hello = Observable.create(function (observer) {
    observer.next('CS572');
    observer.complete();
});


const subscription = hello.subscribe(val => console.log(val), err => console.log(err), () => console.log('done'));

subscription.unsubscribe();
