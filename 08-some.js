// Write a function called some which accepts an array and a callback. Some should return true if the result of the callback at any value is truthy; otherwise it should return false. The callback accepts as its arguments the current array element, the current array index, and the entire array.

// some should not mutate the input array.

// Examples: 

// var arr = [1,2,3,4];

// some(arr, function(val){
//   return val < 4;
// }); // true

// some(arr, function(val){
//   return val > 4;
// }); // false

// some(arr, function(val, idx){
//   return idx > 5;
// }); // false

// some(arr, function(val, idx, arr){
//   return arr.indexOf(5) > -1;
// }); // false

// arr; // [1,2,3,4]


function some(arr, cb){
  // add whatever parameters you deem necessary - good luck!
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i], i, arr)) return true;
  }
  return false;
}
