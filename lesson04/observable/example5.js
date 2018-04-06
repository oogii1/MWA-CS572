const Rx = require('@reactivex/rxjs');

let myromise = new Promise((resolve, reject) => { setTimeout(function () { resolve("Success!"); }, 2000); });

Rx.Observable.fromPromise(myromise)
    .subscribe(e => console.log(e));
