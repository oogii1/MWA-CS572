var Clock = require('./exercise3Clock');
var clock = new Clock();
clock.addTickListener(function (tick) {
    console.log(`Woohoo - ${tick}`);
});
clock.start();