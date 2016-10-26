var express = require('express');
var bookRouter = express.Router();

var router = function (nav) {
    // Require controllers
    var bookController = require('../../controllers/bookController')(null, nav);

    // Check user logged
    bookRouter.use(bookController.middleware);

    // /books
    bookRouter.route('/').get(bookController.getIndex);

    // /books/:id
    bookRouter.route('/:id').get(bookController.getById);

    return bookRouter;
};
module.exports = router;