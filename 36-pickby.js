// function should return a new object consisting of keys and values where the value returns something truthy when passed into the callback.

// Examples:

// function isNumber(val){
//   return Number.isFinite(val);
// }

// var object = { 'a': 1, 'b': '2', 'c': 3 };

// pickBy(object, isNumber) // {'a':1, 'c':3}

// function isShortString(str){
//   return typeof str === "string" && str.length < 10;
// }

// var object1 = { 'name': 'Bob', age: 47, job: null };
// var object2 = { 
//   'key1': 'a string that is too long', 
//   'key2': 'another string that is too long'
// };

// pickBy(object1, isShortString) // { 'name': 'Bob' }
// pickBy(object2, isShortString) // {}


function pickBy(obj, cb){
  // add whatever parameters you deem necessary - good luck!  
  let newObj = {};
  for(let key in obj){
    if(cb(obj[key])) newObj[key] = obj[key];
  }
  return newObj;
  
}