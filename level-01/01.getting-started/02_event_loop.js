var count = 0;

var t = setInterval(function () {
    count++;
    console.log("Interval of 10 ms, count = " + count);
    if (count == 10)
        clearInterval(t);
}, 1000);

setTimeout(function () {
    console.log("Timeout at 200ms");
});

console.log("Running!");