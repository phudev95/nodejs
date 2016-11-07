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
});