/*
    readable [boolean]
    event: ‘data’
    event: ‘end’
    event: ‘error’
    event: ‘close’
    pause()
    resume()
    destroy()
    pipe()
 */
var request = require('request');

var stream = request('http://www.phanvanphu.com/');

stream.on('data', function(chunk) {
    console.log(">>>Data>>> " + chunk);
});

stream.on('end', function() {
    console.log(">>>Done!>>>");
});