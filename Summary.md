# Summary
## Knowledge
* What does REPL stand for? -> `Read-Eval-Print-Loop`
* Mocha -> skip() -> `It skips the current test, no matter what.`
* How can you ensure that only minor version updates are accepted? (i.e. 2.3.1 is okay, but not 2.4.0 or greater) -> `"~2.3.0"`
* How would you stop watching a file after you have enabled fs.watchFile(filename)? -> `fs.unwatchFile(filename)`
* Which of the following can be used to get the currently running code's absolute path? -> `__filename`
* Using Passport.js, how do you log a user out? -> `req.logout();`
* How would you update an already published NPM package? -> `npm publish`
* Which module can be used to get the IP address for the server that the program is running on? -> `os`
* Which of these is NOT a valid version, according to npm semantic versioning? -> `1.2.3b`
* How would you handle an error on a call to http.get(path, callback)? -> `Append .on('error', errorhandler)`
* How do I add query string parameters to http.request(options) calls? -> `options.path`
* Once a user account is created, what is the Passport method used to log a user in? -> `req.login()`
* Which is a correct way to check the latest released version of the Express module with npm? -> `npm view express version`
* Which method can't be used to write a file in Node.js? -> `fs.writeStream()`
* Which package can be used to authenticate API endpoints using tokens? -> `passport-http-oauth`
* What is the default memory limit on a node process? -> `512mb on 32-bit systems and 1gb on 64-bit systems`
* What does process.argv[1] contain? -> `The main Javascript file's file path`
* How do you create a new client connection via SSL? -> `tls.connect()`
* Which package is used to make OAuth calls to external APIs? -> `OAuth`
* When using Passport.js, how do you validate that a user is logged in? -> `if(req.user)`
* How can you delete a file in node.js? ->  `fs.unlink() or fs.unlinkSync()`
* If the Connect node package module is updated from version 2.8.5 to version 3.1.0, which dependency in your package.json file may break your application on update? -> `"connect": ">=2.5"`