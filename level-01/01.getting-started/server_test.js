var http = require('http');
var fs = require('fs');

var app = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var result = 'Hello world ^^';
    if (/test$/.test(req.url)) {
        result = "test route!!\n";
        result += "URL: " + req.url;
    }
    res.end(result);
});

app.listen(2323, function () {
    console.log('Run on port: 2323');
});