var express = require('express');
var app = express();
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Normal
app.get('/', function (req, res) {
    res.send("Hello");
});

// Module
var module = function () {
    var express = require('express');
    var routes = express.Router();

    // http://127.0.0.1:6363/module/a
    routes.get('/a', function (req, res) {
        res.send("Module a called!");
    });

    // http://127.0.0.1:6363/module/b
    routes.get('/b', function (req, res) {
        res.send("Module b called!");
    });

    // http://127.0.0.1:6363/module/c/66
    routes.get('/c/:id', function (req, res) {
        var id = req.params.id;
        res.send("Module c called, and param id: %s", id);
    });

    // Test view
    routes.get('/view', function (req, res) {
        res.render('view', {
            links: [
                {
                    text: "Home",
                    href: "/home"
                },
                {
                    text: "About",
                    href: "/about"
                },
                {
                    text: "Contact",
                    href: "/contact"
                }
            ]
        });
    });


    return routes;
}();

app.use('/module', module);

app.listen("6363", function () {
    console.log("Running on port 6363");
});