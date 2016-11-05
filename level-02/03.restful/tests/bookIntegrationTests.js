// Write test case
var should = require('should');

// Request
var app = require('../app.js');
var request = require('supertest');
var agent = request.agent(app);

// Model
var mongoose = require('mongoose');
var Book = mongoose.model('Book');

describe('Book Crud Test', function(){
    it('Should allow a book to be posted and return a read and _id', function(done){
        var bookPost = {title:'new Book', author:'Jon', genre:'Fiction', read: false};

        agent.post('/api/books')
            .send(bookPost)
            .expect(200)
            .end(function(err, results){
                console.log(results.body.read);
                results.body.read.should.equal(false);
                results.body.should.have.property('_id');
                done();
            });
    });

    afterEach(function(done){
        Book.remove().exec();
        done();
    });
});