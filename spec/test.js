var myFunctions = require("../src/underscore");
var expect = require("chai").expect;
_ = require("underscore");

describe('first', function() {
  it('should be able to pull out the first element of an array', function() {
    // expect(myFunctions.first([1,2,3])).to.equal(1);
  });

  it('should be able to accept a user-defined index first([1,2,3],2) should return [1,2]', function() {

  });
});

describe('last', function() {
  it('should pull the last element from an array', function() {

  });

  it('should accept an index argument', function() {

  });

  it('should return nothing if zero is passed in as the index', function() {

  });

  it('should return all the array\'s elements if the index argument is larger than the length of the array', function() {

  });
});

describe('uniq', function() {
  it('should return all unique values contained in an unsorted array', function() {

  });

  it('should handle iterators that work with a sorted array', function() {

  });
});


describe('pluck', function() {
  it('should return values contained at a user-defined property ', function() {
    // var people = [
    //   {name : 'moe', age : 30},
    //   {name : 'curly', age : 50}
    // ];

    // expect(myFunctions.pluck(people, 'name')).to.eql(['moe', 'curly']);
  });
});

describe('contains', function() {
  it('should return false if a collection does not contain a user-specified value', function() {

  });

  it('should return true if a collection contains a user-specified value', function() {

  });

});

describe('flatten', function() {
  it('can flatten nested arrays', function() {
    // var nestedArray = [1, [2], [3, [[[4]]]]];

    // expect(myFunctions.flatten(nestedArray)).to.eql([1,2,3,4]);
  });
});
