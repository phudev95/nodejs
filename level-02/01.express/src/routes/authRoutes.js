var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var config = require('../../config/conf');
var passport = require('passport');

var router = function () {
    authRouter.route('/signUp')
        .post(function (req, res) {
            mongodb.connect(config.uri, function (err, db) {
                var collection = db.collection('users');
                var user = {
                    username: req.body.userName,
                    password: req.body.password
                };

                collection.insertOne(user, function (err, row) {
                    if (!err && row) {
                        var userDB = row.ops[0];
                        req.login(userDB, function () {
                            res.redirect('profile');
                        });
                    }
                    else {
                        console.log(err);
                    }
                });
            });
        });

    authRouter.route('/signIn')
        .post(
            // Login with local.strategy local, after it with show error or execute callback
            passport.authenticate('local', {failureRedirect: '/'}),
            function (req, res) {
                res.redirect('/auth/profile');
            }
        );

    authRouter.route('/profile')
        // User is empty, then redirect to /
        .all(function (req, res, next) {
            if (!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get(function (req, res) {
            res.json(req.user);
        });

    authRouter.route('/session')
        .get(function (req, res) {
            res.json(req.session);
        });

    return authRouter;
};

module.exports = router;