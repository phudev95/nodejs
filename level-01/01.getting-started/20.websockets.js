var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var handler = function (req, res) {
    fs.readFile(__dirname + '/tmp/index.html', function (err, data) {
        if (!err && data) {
            res.writeHead(200);
            res.end(data);
        }
        else {
            res.writeHead(500);
            res.end('Error loading index.html');
        }
    });
};

// Init server + socketio
var app = http.createServer(handler);
var io = socketio.listen(app);

// Set up connection
io.sockets.on('connection', function (socket) {
    setInterval(function () {
        var timestamp = Date.now();
        console.log('Emitted: ' + timestamp);
        socket.emit('timer', timestamp);
    }, 2000);
    socket.on('submit', function (data) {
        console.log('Submitted: ' + data);
    });
});

// Listen on port 2121
app.listen(2121, '127.0.0.1', function () {
    console.log('Run on port: 2121');
});