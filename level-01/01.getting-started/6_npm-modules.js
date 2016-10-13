var request = require('request');

request('http://www.phasnvanphu.com', function(err, status, data) {
    if (!err && status.statusCode == 200) {
        console.log("================");
        console.log(data);
    }
    else {
        console.error("Error: %s", err.code);
    }
});
