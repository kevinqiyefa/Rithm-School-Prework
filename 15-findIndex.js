// Write a function called findIndex, which accepts an array and a callback. The function should return the index where the callback first returns a truthy value. If the callback never returns a truthy value, findIndex should return -1.

// Examples:

// findIndex([1,2,3,4], function(value){
//   return value === 3;
// }); // 2


// findIndex([{name: 'Test'}, {name: 'Another'}], function(value){
//   return value.name === 'Another';
// }); // 1


// findIndex(['a','bb','ccc'], function(value){
//   return value.length > 3;
// }); // -1



function findIndex(arr, cb){
  // add whatever parameters you deem necessary - good luck!
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])) return i;
  }
  return -1;
}