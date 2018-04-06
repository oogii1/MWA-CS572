const Rx = require('@reactivex/rxjs');

Rx.Observable.of(1, 2, 3)
    .map((n) => n + 3)
    .subscribe(
    (x) => console.log(x),
    null,
    () => console.log('done')
    );
