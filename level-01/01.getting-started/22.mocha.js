// Run via the command line as "mocha 22.mocha.js"

var should = require('should');
var fun = require('./mathfun-test');

describe('MathFun', function () {
    describe('when used synchronously', function () {
        // Case 1
        it('should double even numbers correctly', function () {
            fun.evenDoublerSync(3).should.equal(4);
        });

        // Case 2
        it('should throw on odd numbers', function (done) {
            (function () {
                fun.evenDoublerSync(3)
            }).should.throw(/Odd/);
            done();
        });

    });

    describe('when used asynchronously', function () {
        // Case 3
        it('should double even numbers correctly', function (done) {
            fun.evenDoubler(2, function (err, results) {
                should.not.exist(err);
                results.should.equal(4);
                done();
            });

        });

        // Case 4
        it('should return error on odd numbers', function (done) {
            fun.evenDoubler(3, function (err, results) {
                should.exist(err);
                should.not.exist(results);
                done();
            });
        });
    });
});