process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  process.stdout.write('Data! -> ' + chunk);
});

process.stdin.on('end', function () {
  process.stderr.write('End!\n');
});

process.on('SIGTERM', function() {
    process.stderr.write("Why are you trying to terminate me?!?  :-)");
});

console.log("Node is running as process #" + process.pid);

// CMD 1: Node is running as process #7405
// CDD 2: kill -TERM 7405
// CMD 1: Why are you trying to terminate me?!?  :-)