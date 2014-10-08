var myFunctions = require("../src/underscore");
var expect = require("chai").expect;

// all of these tests are pending...make sure to add , function(){ expect ....}

describe('first', function() {
  it('should be able to pull out the first element of an array');
    // expect(myFunctions.first([1,2,3])).to.equal(1);


  it('should be able to accept a user-defined index first([1,2,3],2) should return [1,2]');

  });


describe('last', function() {
  it('should pull the last element from an array');

  it('should accept an index argument');

  it('should return nothing if zero is passed in as the index');

  it('should return all the array\'s elements if the index argument is larger than the length of the array');

});

describe('uniq', function() {
  it('should return all unique values contained in an unsorted array');

});


describe('pluck', function() {
  it('should return values contained at a user-defined property');
    // var people = [
    //   {name : 'moe', age : 30},
    //   {name : 'curly', age : 50}
    // ];

    // expect(myFunctions.pluck(people, 'name')).to.eql(['moe', 'curly']);
});

describe('contains', function() {
  it('should return false if a collection does not contain a user-specified value');

  it('should return true if a collection contains a user-specified value');
    // expect(myFunctions.contains([  4,   5,   6], 5)).to.equal(true);

});

describe('flatten', function() {
  it('can flatten nested arrays');
    // var nestedArray = [1, [2], [3, [[[4]]]]];

    // expect(myFunctions.flatten(nestedArray)).to.eql([1,2,3,4]);
});
