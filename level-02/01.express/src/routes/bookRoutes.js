var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var config = require('../../config/conf');

var router = function (nav) {
    // Check user logged
    bookRouter.use(function (req, res, next) {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    });

    bookRouter.route('/')
        .get(function (req, res) {

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

        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = new objectId(req.params.id);

            mongodb.connect(config.uri, function (err, db) {
                var collection = db.collection('books');

                collection.findOne({_id: id},
                    function (err, results) {
                        res.render('bookView', {
                            title: 'Books',
                            nav: nav,
                            book: results
                        });

                    }
                );

            });

        });

    return bookRouter;
};
module.exports = router;