// Sample inspired by http://nodejs.org/api/child_process.html
/**
 * Launches a new process with “command” and “args”
 * Returns a ChildProcess object that…
 * is an EventEmitter and emits “exit”, “close” and “disconnect” events
 * has streams for stdin, stdout and stderr that can be piped to/from
 */

var spawn = require('child_process').spawn;
var ps = spawn('ps', ['ax']);
var grep = spawn('grep', ['node']);

// Print all programming working but will filter and get programming contain is 'node'
// => ps ax | grep node
ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);

// Print error if ps not working
ps.stderr.on('data', function (data) {
    console.log('ps stderr: ' + data);
});

// Print error if grep not working
grep.stderr.on('data', function (data) {
    console.log('grep stderr: ' + data);
});