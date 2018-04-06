/**
 * https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md
 */
const { of } = require('rxjs');
const { map } = require('rxjs/operators');

of(1, 2, 3).pipe(map(n => n + 3)).
    subscribe(x => console.log(x), null, () => console.log('done'));
