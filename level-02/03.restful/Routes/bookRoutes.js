var express = require('express');

var routes = function (bookModel) {
    var bookRouter = express.Router();
    var bookController = require('../controllers/bookController')(bookModel);

    // http://127.0.0.1:8000/api/books
    bookRouter.route('/')
        .post(bookController.postAddNewBook)
        .get(bookController.getAllBooks);

    // Middleware: /api/books/:bookId
    bookRouter.use('/:bookId', function (req, res, next) {
        bookModel.findById(req.params.bookId, function (err, book) {
            if (!err && book) {
                req.book = book;
                next();
            }
            else {
                res.status(500).send(err || 'The book not exists..');
            }
        });
    });

    // Route: /api/books/:bookId
    bookRouter.route('/:bookId')
        .get(bookController.findBookById)
        .put(function (req, res) {
            // Update all fields
            if (req.body.hasOwnProperty('title') &&
                req.body.hasOwnProperty('author') &&
                req.body.hasOwnProperty('genre') &&
                req.body.hasOwnProperty('read'))
            {
                req.book.title = req.body.title;
                req.book.author = req.body.author;
                req.book.genre = req.body.genre;
                req.book.read = req.body.read;

                req.book.save(function (err, data) {
                    if (!err) {
                        console.log("Updated (put) >> " + req.params.bookId);
                        res.send(data);
                    }
                    else {
                        res.status(500).send(err);
                    }
                })
            }
            else {
                res.status(500).send('Please send all fields of Book model..');
            }
            console.log(req.body);
        })
        .patch(function (req, res) {
            // Only update if field exists
            // res.send('Only update if field exists');

            // Check req.body
            for (var key in req.body) {
                req.book[key] = req.body[key];
            }

            req.book.save(function (err, data) {
                if (!err) {
                    console.log("Updated (patch) >> " + req.params.bookId);
                    res.send(data);
                }
                else {
                    res.status(500).send(err);
                }
            });
        })
        .delete(function (req, res) {
           // Delete item
            req.book.remove(function (err) {
                if (!err) {
                    res.send("Removed >> " + req.params.bookId);
                }
                else {
                    res.status(500).send(err);
                }
            })
        });

    return bookRouter;
};

module.exports = routes;