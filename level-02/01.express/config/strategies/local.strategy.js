var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function () {
    passport.use(
        new LocalStrategy(
            {
                usernameField: 'userName',
                passwordField: 'password'
            },
            function (username, password, done) {
                console.log('[TRACE] =>', 'local strategy');
                var user = {
                    username: username,
                    password: password
                };
                done(null, user);
            }
        )
    );
};