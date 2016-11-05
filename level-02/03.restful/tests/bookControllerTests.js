var should = require('should');
var sinon = require('sinon');

describe('Book Controller Tests:', function () {
    describe('Post', function () {
        it('should not allow an empty title on post', function () {
            var bookModel = function (book) {
                this.save = function () {

                }
            };

            var req = {
                body: {
                    author: 'Phu Phan'
                }
            };

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            };

            var bookController = require('../controllers/bookController')(bookModel);
            bookController.postAddNewBook(req, res);


            res.status.calledWith(401).should.equal(true, 'Bas Status ' + res.status.args[0][0]);
            res.send.calledWith('Title is required..').should.equal(true);
        });
    })
});