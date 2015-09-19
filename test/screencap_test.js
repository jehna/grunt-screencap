'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

function getNumberOfScreenshots() {
    return grunt.file.expand('tmp/*').length;
}
var lastNumOfScreenshots = 0;
exports.screencap = {
    setUp: function(done) {
        // setup here if necessary
        lastNumOfScreenshots = getNumberOfScreenshots();
        done();
    },
    default_options: function(test) {
        test.expect(1);

        // Do thingies
        var numberOfScreenshots = getNumberOfScreenshots();
        test.equal(numberOfScreenshots > lastNumOfScreenshots, true, 'Should be one more screenshot in temp folder (' + numberOfScreenshots + '/' + lastNumOfScreenshots + ')');
        lastNumOfScreenshots = numberOfScreenshots;
        
        test.done();
    }
};
