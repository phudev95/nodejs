var bookController = function (Book) {
    var get = function (req, res) {
        var query = {};

        if (req.query.genre) {
            query.genre = req.query.genre;
        }
        Book.find(query, function (err, books) {
            if (err)
                res.status(500).send(err);
            else
                res.json(books);
        });
    };

    var post = function (req, res) {
        var book = new Book(req.body);

        book.save();
        res.status(201).send(book);
    };

    var findOne = function (req, res) {
        Book.findById(req.params.bookId, function (err, book) {
            if (err)
                res.status(500).send(err);
            else
                res.json(book);
        });
    };

    return {
        get: get,
        post: post,
        findOne: findOne
    }
};

module.exports = bookController;