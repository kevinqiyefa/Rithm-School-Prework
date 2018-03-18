// Write a function called find which accepts an array and a callback. The function should return the first value for which the callback returns a truthy value. If the callback never returns a truthy value, the function should return undefined.

// Examples:

// find([1,2,3,4], function(value){
//   return value === 2;
// }); // 2

// find([{name: 'Test'}, {name: 'Another'}], function(value){
//   return value.name === 'Another';
// }); // {name: 'Another'}

// find(['a','bb','ccc'], function(value){
//   return value.length > 3;
// }); // undefined


function find(arr, cb){
  // add whatever parameters you deem necessary - good luck!
  for(let val of arr){
    if(cb(val)) return val;
  }

}