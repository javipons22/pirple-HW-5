/*
 * Unit Tests
 *
 */

// Dependencies
var lib = require('./../app/lib');
var assert = require('assert');

// Holder for Tests
var unit = {};


// Assert that the getANumber function is returning a number
unit['helpers.getANumber should return a number'] = function(done){
  var val = lib.getANumber();
  assert.equal(typeof(val), 'number');
  done();
};

// Assert that the isUppercase function receives a uppercase string (not lowercase)
unit['helpers.isUppercase should return true if its all uppercase'] = function(done){
    var val = lib.isUppercase("Hello");
    assert.equal(val, true);
    done();
};

// Assert that the passed array is sorted
unit['helpers.isSorted should return true if array is sorted'] = function(done){
    var val = lib.isSorted([1,2,3,4,5]);
    assert.equal(val, true);
    done();
};


// Export the tests to the runner
module.exports = unit;
