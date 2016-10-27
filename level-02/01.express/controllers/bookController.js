var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var config = require('../config/conf');

var bookController = function (bookService, nav) {
    var middleware = function (req, res, next) {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    };

    var getIndex = function (req, res) {
        mongodb.connect(config.uri, function (err, db) {
            var collection = db.collection('books');

            collection.find({}).toArray(
                function (err, results) {
                    res.render('bookListView', {
                        title: 'Books',
                        nav: nav,
                        books: results
                    });
                }
            );
        });

    };

    var getById = function (req, res) {
        var id = new objectId(req.params.id);

        mongodb.connect(config.uri, function (err, db) {
            var collection = db.collection('books');

            collection.findOne({_id: id},
                function (err, results) {
                    if (results.id) {
                        // Get book from goodreadService
                        bookService.getBookById(results.id, function (err, book) {
                            res.render('bookView', {
                                title: 'Books',
                                nav: nav,
                                book: book
                            });
                        });
                    }
                    else {
                        // Use data default in DB
                        res.render('bookView', {
                            title: 'Books',
                            nav: nav,
                            book: results
                        });
                    }
                }
            );

        });

    };

    return {
        middleware: middleware,
        getIndex: getIndex,
        getById: getById
    };

};

module.exports = bookController;