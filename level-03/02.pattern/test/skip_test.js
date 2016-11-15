var assert = require('assert');

describe('Array', function () {
    describe('#indexOf()', function () {
        it.skip('should return -1 unless present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(1));
        });
        it('should return the index when present', function () {
            assert.equal(2, [1, 2, 3].indexOf(3));
        });
    });
});
