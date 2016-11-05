var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    // >> GET /
    console.log('>> ' + req.method + ' ' + req.url);
    next();
});

// Routes
var bookModel = require('./models/bookModel');
var bookRouter = require('./Routes/bookRoutes')(bookModel);
app.use('/api/books', bookRouter);

app.get('/', function(req, res){
    var data = '<h1>List links</h1>\
                <ul>\
                    <li><a href="/api/books">/api/books</a></li>\
                    <li><a href="/api/books?genre=Female">/api/books?genre=Female</a></li>\
                    <li><a href="/api/books?genre=Male">/api/books?genre=Male</a></li>\
                </ul>';

    res.send(data);
});

app.listen(port, function(){
    console.log('Gulp is running my app on http://127.0.0.1:' + port);
});