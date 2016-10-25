var config = require('../config/conf');
var mongodb = require('mongodb').MongoClient;

mongodb.connect(config.uri, function (err, db) {
    var collection = db.collection('users');
    collection.insertOne({'username': 'phudev95', password: '123456'}, function (err, rows) {
        console.log(rows);
    });
});