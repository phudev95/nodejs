// http://i.imgur.com/B1mFs6s.png
var fork = require('child_process').fork;

//  /home/phu/www/learning/nodejs/level-01/01.getting-started/honorstudent.js
var child = fork(__dirname + '/honorstudent.js');

child.on('message', function(m) {
    console.log('The answer is: ', m.answer);
    child.send({cmd: 'done'});
});

// Trigger
child.send({cmd: 'double', number: 20});