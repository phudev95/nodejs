var express = require('express');
var app = express();
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var uri = 'mongodb://localhost:27017/expressApp';
var books = require('./books').books;

app.get('/', function (req, res) {
    var html = '1. /insert-all<br>\
                2. /all<br>\
                3. find/<id><br>';
    res.send(html);
});

// Insert all data to collection books
// http://127.0.0.1:8989/insert-all
app.get('/insert-all', function (req, res) {
    // Insert many
    mongodb.connect(uri, function (err, db) {
        var collection = db.collection('books');
        collection.insertMany(books, function (err, results) {
            if (!err && results) {
                res.send(results);
            }
            else {
                res.send('Error, please check logs');
                console.log(err);
            }

            db.close();
        });
    });
});

// http://127.0.0.1:8989/all
app.get('/all', function (req, res) {
    mongodb.connect(uri, function (err, db) {
        if (!err && db) {
            var books = db.collection('books');
            books.find({})
                .toArray(function (err, rows) {
                    if (!err && rows) {
                        res.send(rows);
                    }
                    else {
                        res.send('Error, please check logs');
                        console.log(err);
                    }
                });
        }
    });
});

// http://127.0.0.1:8989/find/580ceb63e626db24865a8741
app.get('/find/:id', function (req, res) {
    var id = req.params.id;
    if (!id)
        res.status(404).send('ID is empty...');

    mongodb.connect(uri, function (err, db) {
        if (!err && db) {
            var books = db.collection('books');
            books.findOne({_id: new ObjectId(id)}, function (err, rows) {
                if (!err && rows) {
                    res.send(rows);
                }
                else {
                    res.send('Not found data with ID: ' + id);
                    console.log(err);
                }
            });
        }
    });
});

app.listen('8989', function () {
    console.log('Listening on port 8989');
});

