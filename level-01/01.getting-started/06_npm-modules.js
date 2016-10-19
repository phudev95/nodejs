var request = require('request');

request('http://www.phanvanphu.com', function(err, status, data) {
    if (!err && status.statusCode == 200) {
        console.log("================");
        console.log(data);
    }
    else {
        console.error("Error: %stream", err.code);
    }
});
