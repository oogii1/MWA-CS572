const os = require('os');
const Rx = require('@reactivex/rxjs');

const checkSystem = function () {
    setImmediate(() => {
        var source = Rx.Observable.create(function (observer) {
            let ob = {};
            setTimeout(() => {
                ob.memory = Math.ceil(os.totalmem() / 1024 / 1024 / 1024);
                ob.cpus = os.cpus().length;
                observer.next(ob);
                observer.complete();
            }, 1000);
        });
        var subscription1 = source.subscribe(function (x) {
            const { memory, cpus } = x;
            if (memory < 2) console.log('This app needs at least 2 GB of RAM');
            else if (cpus < 2) console.log('Processor is not supoorted');
            else console.log('System is checked successfully');
        });
    });
    return ('Checking your system...');
};
console.log(checkSystem());
