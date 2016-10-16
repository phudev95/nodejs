var EventEmitter = require('events').EventEmitter;

var getResource = function (total) {
    var event = new EventEmitter();

    process.nextTick(function () {
        var count = 0;
        event.emit('start');
        var interval = setInterval(function () {
            event.emit('data', ++count);
            if (count === total) {
                event.emit('end', count);
                clearInterval(interval);
            }
        }, 10);
    });

    return event;
};

var resource = getResource(5);

resource.on('start', function () {
    console.log("I've started!");
});

resource.on('data', function (d) {
    console.log("   I received data -> " + d);
});

resource.on('end', function (t) {
    console.log("I'm done, with " + t + " data events.");
});

