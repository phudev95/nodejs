var cluster = require('cluster');
var http = require('http');
var numWorkers = 2;
process.env.PORT = process.env.PORT || 1234;
process.env.IP = process.env.IP || '127.0.0.1';

console.log("############");
console.log("Is Master: " + cluster.isMaster);

if (cluster.isMaster) {
    // 1
    // Fork workers.
    for (var i = 0; i < numWorkers; i++) {
        console.log('master: about to fork a worker');
        cluster.fork();
    }

    // 2
    cluster.on('fork', function (worker) {
        console.log('master: fork event (worker ' + worker.id + ')');
    });

    // 3
    cluster.on('online', function (worker) {
        console.log('master: online event (worker ' + worker.id + ')');
    });

    // 5
    cluster.on('listening', function (worker, address) {
        console.log('master: listening event (worker ' + worker.id + ', pid ' + worker.process.pid + ', ' + address.address + ':' + address.port + ')');
    });

    // 7
    cluster.on('exit', function (worker, code, signal) {
        console.log('master: exit event (worker ' + worker.id + ')');
    });

} else {
    // 4
    console.log('worker: worker #' + cluster.worker.id + ' ready!');

    var count = 0;

    // Workers can share any TCP connection
    // In this case its a HTTP server
    http.createServer(function (req, res) {
        res.writeHead(200);
        count++;
        console.log("Worker #" + cluster.worker.id + " is incrementing count to " + count);
        res.end("hello world from worker #" + cluster.worker.id + " (pid " + cluster.worker.process.pid + ") with count = " + count + "\n");
        if (count === 3) {
            // 6
            // cluster.worker.destroy();
        }
    }).listen(process.env.PORT, process.env.IP);

    // Use process.env.PORT and process.env.IP for cloud9
    // replace with your own port and (optionally) IP as required

}