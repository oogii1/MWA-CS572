function slow(callback) {
    setImmediate(function () {
        for (let i = 0; i <= 5e8; i++) { }
        if (Math.random() > 0.5) {
            return callback("Error", null);
        }
        callback(null, { id: 12345 });
    });
}

function exec(fn) {
    var me = this;
    setImmediate(fn, function (err, data) {
        if (err) typeof me._fail === 'function' && me._fail(err);
        else typeof me._done === 'function' && me._done(data);
    });
    this._done = undefined;
    this._fail = undefined;
    this.done = function (cb) { me._done = cb; return me; };
    this.fail = function (cb) { me._fail = cb; return me; };
    return this;
}

exec(slow)
    .done(function (data) {
        console.log(data);
    })
    .fail(function (err) {
        console.log("Error" + err);
    });