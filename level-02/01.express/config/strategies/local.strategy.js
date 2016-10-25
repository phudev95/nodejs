var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongodb = require('mongodb').MongoClient;
var config = require('../conf');

module.exports = function () {
    passport.use(
        new LocalStrategy(
            {
                usernameField: 'userName',
                passwordField: 'password'
            },
            function (username, password, done) {
                console.log('[TRACE] =>', 'local strategy');
                mongodb.connect(config.uri, function (err, db) {
                    var collection = db.collection('users');
                    collection.findOne({username: username}, function (err, row) {
                        if (!err && row && row.password === password) {
                            done(null, row);
                        }
                        else {
                            done(null, false, {message: 'Incorrect username or password'});
                        }
                    });
                });
            }
        )
    );
};