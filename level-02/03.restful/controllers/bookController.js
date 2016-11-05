var bookController = function (bookModel) {
    /**
     * Get all books
     * Maybe where data with genre
     * @param req
     * @param res
     */
    var getAllBooks = function (req, res) {
        var query = {};

        if (req.query.genre) {
            query.genre = req.query.genre;
        }
        bookModel.find(query, function (err, books) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                var returnBooks = [];
                books.forEach(function (element, index, array) {
                    var newBook = element.toJSON();
                    newBook.links = {};
                    newBook.links.self = 'http://' + req.headers.host + '/api/books/' + newBook._id;
                    returnBooks.push(newBook);
                });

                res.json(returnBooks);
            }
        });
    };

    /**
     * Add new a book
     * @param req
     * @param res
     */
    var postAddNewBook = function (req, res) {
        var book = new bookModel(req.body);
        console.log("=================");
        console.log(req.body);
        console.log("//==========");

        if (!req.body.title) {
            res.status(401);
            res.send('Title is required..');
        }
        else {
            book.save();
            res.status(201);
            res.send(book);
        }
    };

    /**
     * Find a book with ID
     * req.book Book data from middleware
     * @param req
     * @param res
     */
    var findBookById = function (req, res) {
        console.log(32323);
        var returnBook = req.book.toJSON();
        returnBook.links = {};
        returnBook.links.filterByThisGenre = 'http://' + req.headers.host + '/api/books/?genre=' + returnBook.genre;

        res.send(returnBook);
    };

    return {
        getAllBooks: getAllBooks,
        postAddNewBook: postAddNewBook,
        findBookById: findBookById
    }
};

module.exports = bookController;