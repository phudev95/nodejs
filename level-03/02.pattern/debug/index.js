var info = require('../lib/info');
var otherInfo = require('../lib/info');
console.log(info.getName());
console.log(otherInfo.getName());

info.setName('Phap');
console.log(info.getName());
console.log(otherInfo.getName());