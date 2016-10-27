var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray: false});

var goodreadService = function () {
    var getBookById = function (id, cb) {
        var options = {
            hostname: 'www.goodreads.com',
            path: '/book/show/' + id + '?format=xml&key=mN1DyVoFS4cfbCMh5HmnpA'
        };

        var callback = function (response) {
            var tmp = '';

            response.on('data', function (chunk) {
                tmp += chunk;
            });

            response.on('end', function () {
                // Parser XML to json
                parser.parseString(tmp, function (err, json) {
                    cb(null, json.GoodreadsResponse.book);
                });
            });
        };

        http.request(options, callback).end();
    };

    return {
        getBookById: getBookById
    };
};

module.exports = goodreadService;