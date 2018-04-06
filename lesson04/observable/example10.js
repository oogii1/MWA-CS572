const Rx = require('@reactivex/rxjs');

const source = Rx.Observable.from([ 
      {name: 'Asaad', age: 36, job: {title: 'Developer', language: 'JavaScript'}}, 
      {name: 'Mike', age:33} ])// will return undefined
  .pluck('job', 'title')
  .subscribe(val => console.log(val)); 

