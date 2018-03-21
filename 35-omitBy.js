// Write a function called omitBy which accepts an object and a callback function. This function should return an object with all the keys and values for which the values return falsey values when passed into the callback function.

// Examples:

// function isNumber(val) {
//   return Number.isFinite(val);
// }

// var isString(val) {
//   return typeof val === "string";
// }

// var object = { 'a': 1, 'b': '2', 'c': 3 };
// omitBy(object, isNumber) // { 'b': '2' }
// omitBy(object, isString) // { 'a': 1, 'c': 3 }


function omitBy(obj, cb){
  // add whatever parameters you deem necessary - good luck!  
  let newObj = {};
  for(let key in obj){
    if(!cb(obj[key])) newObj[key] = obj[key];
  }
  return newObj;
}

