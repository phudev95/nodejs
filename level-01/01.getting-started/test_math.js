var mathfunTest = require('./mathfun-test');
var input = process.argv[2] || 6;

// Even Doubler
mathfunTest.evenDoubler(input, function (err, data, time) {
    if (!err && data) {
        // Even: 2,4,6
        console.log("### Done: %s is even ###", input);
        console.log(data);
        console.log(time);
    }
    else {
        // Odd: 1,3,5
        console.error("Error: %s is odd with message: %s", input, err.message);
    }
});

// Even Doubler Sync
try {
    var val = mathfunTest.evenDoublerSync(input);
    console.log("Even Doubler Sync: %s", val);
} catch (e) {
    console.log("Even Doubler Sync -> Error: %s => %s", input, e);
}
