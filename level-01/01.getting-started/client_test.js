var http = require('http');

// Way 1
//http.get('http://ve.phanvanphu.com', function (res) {
//    res.pipe(process.stdout);
//});

// Way 2
http.get('http://news.phanvanphu.com', function (res) {
    var chunk = '';
    var count = 1;
    res.on('data', function (data) {
        console.log("### Loop %s", count);
        chunk += data;
        count++;
    });

    res.on('end', function () {
        console.log(chunk);
    });
});