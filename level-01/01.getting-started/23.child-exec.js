/**
 * Runs “command” string in a shell
 * Callback is invoked on process completion with error, stdout, stderr
 */
var exec = require('child_process').exec;

var cmd = 'uptime | cut -d "," -f 1';
if (process.platform != 'linux') {
    cmd = 'systeminfo';
}

var child = exec(cmd, function(err, stdout, stderr) {
    if (err) {
        console.log('Error: ' + stderr);
    }
    else {
        console.log('Output is: ' + stdout);
    }
});

console.log("PID is " + child.pid);