var express = require('express');
var bookRouter = express.Router();

var router = function (nav) {
    // Require controllers, services
    var goodreadService = require('../../services/goodreadService')();
    var bookController = require('../../controllers/bookController')(goodreadService, nav);

    // Check user logged
    bookRouter.use(bookController.middleware);

    // /books
    bookRouter.route('/').get(bookController.getIndex);

    // /books/:id
    bookRouter.route('/:id').get(bookController.getById);

    return bookRouter;
};
module.exports = router;