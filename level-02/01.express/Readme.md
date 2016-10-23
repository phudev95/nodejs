## Install packages global
```
npm i -g gulp
```

## Package in gulp config

- [gulp-jshint](https://github.com/spalger/gulp-jshint) (Read config in .jshinrc and check style of code)
- [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) (Stylish reporter for JSHint)
- [gulp-jscs](https://github.com/jscs-dev/gulp-jscs) (Read config in .jscsrc and it want make sure you have curly braces, no multi-lined string, or no mixed,...)
- [gulp-inject](https://www.npmjs.com/package/gulp-inject) (It will inject css, js into html file, no more manual editing of your html!)
- [wiredep](https://github.com/taptapship/wiredep) (Wire Bower dependencies to your source code.)
- [gulp-nodemon](https://www.npmjs.com/package/gulp-nodemon) (It  looks almost exactly like regular nodemon, but it's made for use with gulp tasks)

## Tasks

- style: Make sure style code is valid
- inject: Inject css, js to html files.
- serve: Run 2 tasks above, after will config enviroment, watching code, and create port for web app.

## MSSQL
##### Config
```javascript
var sql = require('mssql');
var config = {
    user: 'books',
    password: 'pluralsight1@',
    server: 'gpnju6fwr2.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'Books',
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
};

// Connect
sql.connect(config, function (err) {
    if (err) {
        console.log(err);
    }
});
```
##### Get books
```javascript
var sql = require('mssql');
var request = new sql.Request();

// Query
request.query('select * from books', function (err, recordset) {
    if (!err && recordset) {
        console.log(recordset);
    }
    else {
        console.log(err);
    }
});
```
##### Get book by id
```javascript
var sql = require('mssql');
var id = 6;
var ps = new sql.PreparedStatement();
ps.input('id', sql.Int);

ps.prepare('select * from books where id = @id', function (err) {
    ps.execute({id: id}, function (err, recordset) {
        if (recordset.length === 0) {
            res.status(404).send('Not Found');
        } else {
            console.log(recordset);
        }
    });
});
```

## MongoDB
```
npm install mongodb --save
```
#### Demo
```javascript
var express = require('express');
var app = express();
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var uri = 'mongodb://localhost:27017/expressApp';
var books = require('./books').books;

app.get('/', function (req, res) {
    res.send("1. /insert-all");
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
```

## References
 - [https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html)
 - [https://code.google.com/archive/p/embeddedjavascript/wikis/ViewHelpers.wiki](https://code.google.com/archive/p/embeddedjavascript/wikis/ViewHelpers.wiki)

