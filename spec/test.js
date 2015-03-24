var myFunctions = require("../src/underscore");
var expect = require("chai").expect;
_ = require("underscore");

describe('first', function() {
  it('should be able to pull out the first element of an array', function() {
    expect(myFunctions.first([1,2,3])).to.equal(1);
  });

  it('should be able to accept a user-defined index first([1,2],0) should return 1', function() {
    expect(myFunctions.first([1,2,3], 0)).to.eql([]);
    expect(myFunctions.first([1,2,3], 2)).to.eql([1, 2]);
    expect(myFunctions.first([1,2,3], 5)).to.eql([1, 2, 3]);
  });
});

describe('last', function() {
  it('should pull the last element from an array', function() {
    expect(myFunctions.last([1,2,3])).to.equal(3);
  });

  it('should accept an index argument', function() {
    expect(myFunctions.last([1,2,3], 2)).to.eql([2, 3]);
  });

  it('should return nothing if zero is passed in as the index', function() {
    expect(myFunctions.last([1,2,3], 0)).to.eql([]);
  });

  it('should return all the array\'s elements if the index argument is larger than the length of the array', function() {
    expect(myFunctions.last([1,2,3], 5)).to.eql([1, 2, 3]);
  });
});

describe('uniq', function() {
  it('should return all unique values contained in an unsorted array', function() {
    var list = [1, 2, 1, 3, 1, 4];

    expect(myFunctions.uniq(list)).to.eql([1, 2, 3, 4]);
  });

  it('should handle iterators that work with a sorted array', function() {
    var iterator = function(value) { return value +1; };
    var list = [1, 2, 2, 3, 4, 4];

    expect(myFunctions.uniq(list, true, iterator)).to.eql([1, 2, 3, 4]);
  });
});


describe('pluck', function() {
  it('should return values contained at a user-defined property', function() {
    var people = [
      {name : 'moe', age : 30},
      {name : 'curly', age : 50}
    ];

    expect(myFunctions.pluck(people, 'name')).to.eql(['moe', 'curly']);
  });
});

describe('contains', function() {
  it('should return false if a collection does not contain a user-specified value', function() {
    expect(myFunctions.contains([4,5,6], 2)).to.equal(false);
  });

  it('should return true if a collection contains a user-specified value', function() {
    expect(myFunctions.contains([  4,   5,   6], 5)).to.equal(true);
  });

});

describe('flatten', function() {
  it('can flatten nested arrays', function() {
    var nestedArray = [[[[[[[[[[[[[[[[[[[[[[[[[[[[1, [2], [[[[3]]], [[[4]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];

    expect(myFunctions.flatten(nestedArray)).to.eql([1,2,3,4]);
  });
});
