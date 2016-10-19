var Resource = require('./resource');

var resource = new Resource(7);

resource.on('start', function() {
    console.log("I've started!");
});

resource.on('data', function(d) {
    console.log("   I received data -> " + d);
});

resource.on('end', function(t) {
    console.log("I'm done, with " + t + " data events.");
});