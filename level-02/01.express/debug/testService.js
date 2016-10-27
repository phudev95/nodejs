var goodreadService = require('../services/goodreadService')();

goodreadService.getBookById(656, function (err, data) {
    console.log('okie');
});