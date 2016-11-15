var db = require("secondthought");

db.connect({db: "membership"}, function (err, db) {
    // Query
    /*db.users.query({}, function (err, data) {
        console.log(data);
    });*/

    // Destroy all
    db.users.destroyAll(function (err, result) {
        console.log(result);
    });

    // Insert
    /*db.users.save({username: 'phudev95', email: 'phudev95@gmail.com'}, function (err, data) {
        console.log(data);
    })*/
});

//console.log(db);
