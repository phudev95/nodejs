var Registration = require("../lib/registration");
var db = require("secondthought");
var should = require("should");

describe("Registration", function () {
    var reg = {};

    // Connect database
    before(function (done) {
        db.connect({db: "membership"}, function (err, db) {
            console.log('done');
            reg = new Registration(db);
            done();
        });
    });

    // reg is instance of Registration
    /*describe("a valid application", function () {
        var regResult = {};

        // Delete all users and then will add new user
        before(function (done) {
            // Delete all users
            db.users.destroyAll(function () {
                // Add new user
                reg.applyForMembership({
                    email: "rob@tekpub.com",
                    password: "password",
                    confirm: "password"
                }, function (err, result) {
                    regResult = result;
                    done();
                });
            });
        });

        // Test case
        it("is successful", function () {
            regResult.success.should.equal(true);
        });

        it("creates a user", function () {
            regResult.user.should.be.defined;
        });

        it("creates a log entry", function () {
            regResult.log.should.be.defined;
        });

        it("sets the user's status to approved", function () {
            regResult.user.status.should.equal("approved");
        });

        it("offers a welcome message", function () {
            regResult.message.should.equal("Welcome!");
        });

        it("increments the signInCount", function () {
            regResult.user.signInCount.should.equal(1);
        });
    });*/

    /*describe("an empty or null email", function () {
        var regResult = {};
        before(function (done) {
            reg.applyForMembership({
                email: null,
                password: "password",
                confirm: "password"
            }, function (err, result) {
                regResult = result;
                done();
            });
        });

        it("is not successful", function () {
            regResult.success.should.equal(false);
        });

        it("tells user that email is required", function () {
            regResult.message.should.equal("Email and password are required");
        });
    });*/

    /*describe("empty or null password", function () {
        var regResult = {};
        before(function (done) {
            reg.applyForMembership({
                email: "test@test.com",
                password: null,
                confirm: "password"
            }, function (err, result) {
                regResult = result;
                done();
            });
        });
        it("is not successful", function () {
            regResult.success.should.equal(false);
        });
        it("tells user that password is required", function () {
            regResult.message.should.equal("Email and password are required");
        });
    });*/

    /*describe("password and confirm mismatch", function () {
        var regResult = {};
        before(function (done) {
            reg.applyForMembership({
                email: "test@test.com",
                password: "goofy",
                confirm: "password"
            }, function (err, result) {
                regResult = result;
                done();
            });
        });
        it("is not successful", function () {
            regResult.success.should.equal(false);
        });
        it("tells user passwords don't match", function () {
            regResult.message.should.equal("Passwords don't match");
        });
    });*/

    describe("email already exists", function () {
        before(function (done) {
            var newUser = {email: "rob@tekpub.com", password: "password", confirm: "password"};
            // Delete all users
            // Add user and add user again
            db.users.destroyAll(function (err, deleted) {
                reg.applyForMembership(newUser, function (err, result) {
                    reg.applyForMembership(newUser, function (err, nextResult) {
                        regResult = nextResult;
                        done();
                    });
                });
            });
        });

        // Test case
        it("is not successful", function () {
            regResult.success.should.equal(false);
        });

        it("tells user that email already exists", function () {
            regResult.message.should.equal("This email already exists");
        });
    });
});