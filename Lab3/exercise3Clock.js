var Event = require('events');
class Clock extends Event {
    constructor() {
        super();
        this.counter = 0;
    }
    start() {
        setInterval(()=>{
            this.emit('tick', this.counter++);
        }, 1000);
    }
    addTickListener(cb){
        this.on('tick', cb);
    }
}
module.exports = Clock;