var spawn = require('child_process').spawn;

// Case 1: Print all files
//var ls = spawn('ls', ['-la']);
//console.log("######### Case 1: Print all files");
//ls.stdout.pipe(process.stdout);

// Case 2: Filter all files with filename contain "math"
console.log('######### Case 2: Filter all files with filename contain "math"');
var ls = spawn('ls', ['-la']);
var grep = spawn('grep', ['math']);

// ls.stdout => grep.stdin => grep.stdout => process.stdout
ls.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);