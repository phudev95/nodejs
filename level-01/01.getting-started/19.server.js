var fs = require('fs');
var http = require('http');
var port = process.env.PORT || 8989;
var IP = process.env.IP || '127.0.0.1';

var app = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url === '/new.txt') {
        fs.createReadStream(__dirname + '/tmp/new.txt').pipe(res);
    }
    else {
        res.end('Hello world');
    }
});

app.listen(port, IP, function () {
    console.log("Run on port: %s with IP: %s", port, IP);
});

console.log('Server running!');