var assert = require('assert');
var mathfunTest = require('./mathfun-test');

// ==
//assert.equal(4 * 2, 7); // Trace
assert.equal(4 * 2, 8);

// !=
//assert.notEqual(8, 8);// Trace
assert.notEqual(8, 6);

// Check if it error
//assert.ifError(new Error("Bug bug bug"));// Trace and die
console.log("If it not error, then will run this line...");

// Check throws
var test_case = function () {
    throw new Error("Bug at here, here...");
};
assert.throws(test_case, Error);// Check type is Error
assert.throws(test_case, /Bug at/);// Check error message contain 'Bug at'