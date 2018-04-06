const {interval, of} = require('rxjs');
const { take, map, mergeAll, mergeMap} = require('rxjs/operators');

var source = interval(100).pipe(take(10), map(x => of("a", "b", "c")), mergeAll());

source.subscribe(x => console.log(x));


var source = interval(100).pipe(take(10), mergeMap(x => of("a", "b", "c")));

source.subscribe(x => console.log(x));