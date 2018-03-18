// Write a function called pick, which accepts an object and an array of keys and returns a new object with all of the keys that are in the array passed to pick. If an array element doesn't correspond to a valid key, the element is simply ignored.

// Examples:

// var object = { 'a': 1, 'b': 2, 'c': 3 }; 
// pick(object, ['a', 'c']); // { 'a': 1, 'c': 3 }
// pick(object, ['b', 'c']); // { 'b': 2, 'c': 3 }

// pick(object, ['a', 'd']); // { 'a': 1 }
// pick(object, ['d', 'e', 'f']); // { }


function pick(obj, arr){
  // add whatever parameters you deem necessary - good luck!
  let newObj = {};
  for(let val of arr){
    if(val in obj){
      newObj[val] = obj[val];
    }
  }
  return newObj;
}