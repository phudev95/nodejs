var express = require('express');

var routes = function (Book) {
    var bookRouter = express.Router();
    var bookController = require('../controllers/bookController')(Book);

    // http://127.0.0.1:8000/api/books
    bookRouter.route('/')
        .post(bookController.post)
        .get(bookController.get);

    // http://127.0.0.1:8000/api/books/581b17401ff3925ff64b54d0
    bookRouter.route('/:bookId')
        .get(bookController.findOne);

    return bookRouter;
};

module.exports = routes;