var assert = require('assert');
var MembershipApplication = require('../models/membership_application');
var validApp;

before(function () {
    validApp = new MembershipApplication({
        first: "Test",
        last: "user",
        email: "test@gmail.com",
        age: 30,
        height: 66,
        weight: 180
    })
});

describe('Membership application requitements', function () {
    describe('Application valid if...', function () {
        it('All validators successful', function () {
            assert(validApp.isValid(), "Not Valid")
        });

        it('Email is 4 or more chars and contains an @', function () {
            assert(validApp.emailIsValid());
        });

        it('Height between 60 and 75 inches', function () {
            assert(validApp.heightIsValid());
        });

        it('Age is between 15 and 100', function () {
            assert(validApp.ageIsValid());
        });

        it('Weight is between 100 and 300', function () {
            assert(validApp.weightIsValid());
        });

        it('First and last name are provided', function () {
            assert(validApp.nameIsValid());
        });
    });

    describe('Application invalid if...', function () {
        it('Email is 4 characters or less', function () {
            var app = new MembershipApplication({email: 'g@g'});
            assert(!app.emailIsValid());
        });

        it('email does not contain an @', function () {
            var app = new MembershipApplication({email: "thingthingthing:thing.com"});
            assert(!app.emailIsValid());
        });

        it('email is omitted', function () {
            var app = new MembershipApplication();
            assert(!app.emailIsValid());
        });

        it('height is less than 60 inches', function () {
            var app = new MembershipApplication({height: 10});
            assert(!app.heightIsValid());
        });

        it('height is more than 75 inches', function () {
            var app = new MembershipApplication({height: 80});
            assert(!app.heightIsValid());
        });

        it('height is omitted', function () {
            var app = new MembershipApplication();
            assert(!app.heightIsValid());
        });

        it('age is more than 100', function () {
            var app = new MembershipApplication({age: 101});
            assert(!app.ageIsValid());
        });

        it('age less than 15', function () {
            var app = new MembershipApplication({age: 14});
            assert(!app.ageIsValid());
        });

        it('age is omitted', function () {
            var app = new MembershipApplication();
            assert(!app.ageIsValid());
        });

        it('weight less than 100', function () {
            var app = new MembershipApplication({weight: 99});
            assert(!app.weightIsValid());
        });

        it('weight less more than 300', function () {
            var app = new MembershipApplication({weight: 301});
            assert(!app.weightIsValid());
        });

        it('weight is omitted', function () {
            var app = new MembershipApplication();
            assert(!app.weightIsValid());
        });

        it('first is omitted', function () {
            var app = new MembershipApplication();
            assert(!app.nameIsValid());
        });

        it('last is omitted', function () {
            var app = new MembershipApplication();
            assert(!app.nameIsValid());
        });
    });
});