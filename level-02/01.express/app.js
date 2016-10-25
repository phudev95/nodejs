// Init express
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
var port = process.env.PORT || 5000;

var nav = [{
    Link: '/books',
    Text: 'Book'
},
{
    Link: '/auth/profile',
    Text: 'Author'
}];

// Middleware
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({secret: 'asdasdasd'}));

require('./config/passport')(app);


// Add routes
var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')();
app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

// Root
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: nav
    });
});

// /books
app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('Running server on 127.0.0.1:' + port);
});