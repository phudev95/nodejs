# JavaScript
## Maintainable
##### Summary
* Avoiding the Global Scope means you have to worry less on the collision
* Using strict JavaScript will highlight errors earlier
* Structuring your code into modular units will increase stability
* Injecting dependencies allows you to not handle the wire up of dependencies
* Abandon nested callbacks in favor of promises or async patterns
* Use eventing and messaging to loosely couple your modules

#### 1. Avoiding the Global Scope means you have to worry less on the collision
1. Self-Executing Anonymous Functions (SEAF)
2. Also called Self-Invoking Anonymous Functions (SIAF)
3. And Immediately Invoked Function Expressions (IIFE)
```javascript
(function ($) {
    // Not leaked to the global scope
    var _cache = {};
    $(document).ready(function () {
        // Startup Code
        _.each(_cache, function (i) {
        // Work with Collection
        })
    });
})(jQuery);
```
#### 2. Using strict JavaScript will highlight errors earlier
1. Throws Exceptions on Bad Practices
2. Improves Code Quality
3. Provides Early Detection of Problem Code
4. Not a Replacement for JSLint
```javascript
(function () {
    "use strict"; // Backwards compatible

    x = 0; // Nope
    var y = "";
    y = 123; // Nope
    // et al.
})();
```
#### 3. Structuring your code into modular units will increase stability
1. Pros
    1. Single unit of work
    2. Small
    3. Reusable
    4. Testable
    5. Loosely coupled
    6. Discrete
2. Rules
    1. No DOM manipulation outside a Module
    2. No hard coupling to other Modules
    3. No Accessing Global/Native Objects
    4. No Global declarations
```javascript
// Modular JavaScript (Module Pattern)
var destinationsModule = (function() {
    "use strict";
    var _cache = {};
    function _fillCache(callback) {
        // ...
    }
    return {
        fillCache: _fillCache,
        cache: _cache
    };
})();

// Modular JavaScript (JavaScript Class)
function Animal() {
    "use strict";
    this.cache = {};
}
Animal.prototype.walk = function () {
    // ...
}
```
#### 4. Injecting dependencies allows you to not handle the wire up of dependencies
1. Dependency management
    1. Require.js (e.g. )AMD
    1. Commonjs
    1. AngularJS
```javascript
//--- Asynchronous Module Definition (AMD)
// Use
require(["someModule", "jQuery"], function (someModule, $) {
    // Use the dependencies
});

// Define
define("someModule", [], function () {
    function _init() {
        // ...
    }
    return {
        init: _init
    };
});

//--- CommonJS Spec
// Use
var api = require('./api');

// Define
exports.getCities = function (cb) {
    // ...
};
exports.saveCities = function (cities, cb) {
    // ...
};
exports.City = function (name) {
    this.name = name;
    // ...
};
```
#### 5. Abandon nested callbacks in favor of promises or async patterns
```javascript
// Is bad
$(document).ready(function() {
    $.get("/api/destinations", function(result) {
        if (result.success) {
            if ($("#userName").length > 0) {
                $.get("/api/user/" + userid, function(result) {
                    if (result.success) {
                        // ...
                    }
                });
            }
        } else {
            alert("Failed to get destinations");
        }
    });
});

// Using Q.js
someModule.makeAsyncCall()
    .then(function () { /*...*/ })
    .then(function () { /*...*/ })
    .fail(function () { /*...*/ })
    .finally(function () { /*...*/ })
    .done();
    
// Using Async
async.parallel([
    function(cb) {
        // ...
        cb(1);
    },
    function(cb) {
        // ...
        cb(2);
    }
],
function (err, results) {
    // ...
    // results = [1,2]
})
```
#### 6. Use eventing and messaging to loosely couple your modules 
1. Loose coupling solutions
    1. jQuery events
    2. AmplifyJS
    3. AngularJS
```javascript
//--- jQuery
// Publish Event
$.event.trigger("our.event.name", ["some", "context"]);

// Subscribe (requires DOM element)
$(document).on("our.event.name",
function (event, some, context) {
    // ...
});

//--- AmplifyJS
// Publish
amplify.publish("our.message.name", "some", "context");

// Subscribe
amplify.subscribe("our.message.name", function (some, ctx) {
    // ...
});

//--- AngularJS
// Publish
theApp.controller("bCtrl", function ($rootScope) {
    $rootScope.$broadcast("our.message.name", "some", "context");
});

// Subscribe
theApp.controller("aCtrl", function ($scope) {
    $scope.$on("our.message.name", function (some, ctx) { /*...*/ })
});
```


## Scalable
##### Summary
* Knowing you have a problem is often the first task of scaling your JavaScript
* Focusing on better code will make your application scale better
* Being lazy about you execution is often a better approach
* Minification will help you improve perfomance of downloads and parsing
* Only loading the JavaScript required to do the job is also crucial
* Late loading JavaScript as it is needed is another useful technique

#### 1. Knowing you have a problem is often the first task of scaling your JavaScript
![Screenshot](http://i.imgur.com/ouOQb1i.png)
#### 2. Focusing on better code will make your application scale better
#### 3. Being lazy about you execution is often a better approach
#### 4. Minification will help you improve perfomance of downloads and parsing
#### 5. Only loading the JavaScript required to do the job is also crucial
#### 6. Late loading JavaScript as it is needed is another useful technique