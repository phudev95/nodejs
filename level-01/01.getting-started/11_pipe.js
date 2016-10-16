var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

// Version 1:  Pipe HTML to standard out
//var stream = request('http://ve.phanvanphu.com/');
//stream.pipe(process.stdout);

// Version 2:  Chain request and pipe together
request('http://www.phanvanphu.com/').pipe(process.stdout);

// Version 3:  Pipe HTML to a file instead of standard out
request('http://girlxinh.phanvanphu.com/')
    .pipe(fs.createWriteStream('temp/girlxinh.phanvanphu.html'));

// Version 4:  Pipe HTML through a gzip stream to a compressed file
request('http://news.phanvanphu.com/')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('temp/news.phanvanphu.html.gz'));