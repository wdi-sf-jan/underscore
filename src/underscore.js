
var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first :function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last :function(array, n) {
    // if (n === undefined) {
     // return array[array.length-1];
    // }
    // else if (n > array.length) {
      // return array;
    // }
    // else {
      // return array.splice(array.length-n, n);
    // }
    return n === undefined ? array[array.length-1] : n > array.length ? array : array.splice(array.length-n, n);
 },

  // Produce a duplicate-free version of the array.
  uniq :function(array) {
    var dupFreeArray = [];
    array.forEach(function(item){
      if (dupFreeArray.indexOf(item) === -1) {
        dupFreeArray.push(item);
      }
    });
    return dupFreeArray;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  pluck :function(collection, key) {
    return collection.map(function(item){
      return item[key];
    });
  },

  contains :function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce()
    return collection.reduce(function(wasFound, item) {
      if(wasFound) {
        return true;
      }
      return item === target;
    }, false);
  },

  // Hint: Use Array.isArray to check if something is an array
  flatten :function(nestedArray) {
    var flatArray = [];
    function addItems(arr) {
      arr.forEach(function(item) {
        return Array.isArray(item) ? addItems(item) : flatArray.push(item);
      });
    }
    addItems(nestedArray);
    return flatArray;
  }
};

module.exports = myFunctions;
