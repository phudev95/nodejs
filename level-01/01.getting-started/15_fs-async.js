var fs = require('fs');

if (fs.existsSync('tmp')) {
    console.log('Directory exists, removing...');
    if (fs.existsSync('tmp/new.txt')) {
        fs.unlinkSync('tmp/new.txt');
    }
    fs.rmdirSync('tmp');
}

fs.mkdir('tmp', function(err) {
    fs.exists('tmp', function(exists) {
        if (exists) {
            process.chdir('tmp');
            fs.writeFile('test.txt', 'This is some test text for the file', function(err) {
                fs.rename('test.txt','new.txt', function(err) {
                    fs.stat('new.txt', function(err, stats) {
                        console.log('File has size: ' + stats.size + ' bytes');
                        fs.readFile('new.txt', function(err, data) {
                            console.log(data.toString());
                            console.log('File contents: ' + data.toString());
                        });
                    });
                });
            });
        }
    });
});