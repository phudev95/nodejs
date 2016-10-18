var fs = require('fs');

if (fs.existsSync('tmp')) {
    console.log('Directory exists, removing...');
    if (fs.existsSync('tmp/new.txt')) {
        fs.unlinkSync('tmp/new.txt');
    }
    fs.rmdirSync('tmp');
}

fs.mkdirSync('tmp');
if (fs.existsSync('tmp')) {
    process.chdir('tmp');
    fs.writeFileSync('test.txt', 'This is some test text for the file');
    fs.renameSync('test.txt','new.txt');
    console.log('File has size: ' + fs.statSync('new.txt').size + ' bytes');
    console.log('File contents: ' + fs.readFileSync('new.txt').toString());
}