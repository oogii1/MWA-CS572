const Rx = require('@reactivex/rxjs');

var source = Rx.Observable.create(function (observer) {
    observer.next('CS572');
    observer.complete();
});

var subscription = source.subscribe(function (x) { console.log(x); },
				function (err) { console.error(err); },
				function () { console.info('done'); });
