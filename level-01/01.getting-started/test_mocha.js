// http://shouldjs.github.io/
// http://unitjs.com/guide/should-js.html
/*
    * assert.fail(actual, expected, message, operator)      // just write wrong should * assert.on
    * assert.value, message), * assert.ok(value, [message]) // should(value).ok
    * assert.equal(actual, expected, [message])             // should(actual).eql(expected, [message])
    * assert.notEqual(actual, expected, [message])          // should(actual).not.eql(expected, [message])
    * assert.deepEqual(actual, expected, [message])         // should(actual).eql(expected, [message])
    * assert.notDeepEqual(actual, expected, [message])      // should(actual).not.eql(expected, [message])
    * assert.strictEqual(actual, expected, [message])       // should(actual).equal(expected, [message])
    * assert.notStrictEqual(actual, expected, [message])    // should(actual).not.equal(expected, [message])
    * assert.throws(block, [error], [message])              // should(block).throw([error])
    * assert.doesNotThrow(block, [message])                 // should(block).not.throw([error])
    * assert.ifError(value)                                 // should(value).Error (to check if it is error) or should(value).not.ok (to check that it is falsy)
 */
var should = require('should');

function plus (num1, num2) {
    if (!num1 || !num2) {
        throw new Error('Bug bug bug olaola');
    }

    return num1 + num2;
}

var user = {
    name: 'phu',
    pets: ['tobi', 'loki', 'jane', 'bandit']
};

function trace_callback(isThrow, fun) {
    if (!isThrow) {
        fun.call({}, null, {bar: 'Foo'});
    }
    else {
        // Trace error
        fun.call({}, new Error("isThrow is enabled."));
    }
}

describe('TestMocha', function () {
    describe('Test case 1', function () {
        it('test case equal', function () {
            plus(2, 3).should.eql(5);
        });

        it('test case not equal', function () {
            plus(2, 3).should.not.equal(6);
        });

        it('test case exactly', function () {
            plus(2, 3).should.be.exactly(5);
        });

        it('test case ifError', function () {
            // Way 1
            /*(function () {
                plus();
            }).should.throw();*/

            // Way 2
            plus.bind({}).should.throw();
        });

        it('test case does not throw', function () {
            plus.bind({}, 5, 5).should.not.throw();
        });

        it('test case should have property', function () {
            user.should.have.property('name', 'phu');
        });

        it('test case count property of arrays is valid', function () {
            user.should.have.property('pets')
                .with.lengthOf(4);
        });

        it('trace error', function () {
            // Arg 1 will accept trace or not trace error
            trace_callback(false, function (err, result) {
                should.not.exists(err);
                should.exists(result);

                result.bar.should.equal('Foo');
            });
        });
    });
});