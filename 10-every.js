// Write a function called every which accepts an array and a callback. every should return true if the result of the callback at each value is truthy; otherwise it should return false. The callback accepts as its arguments the current array element, the current array index, and the entire array.

// every should not mutate the input array.

// Examples: 

// var arr = [1,2,3,4];

// every(arr, function(val, idx, arr){
//   return val < 5;
// }); // true

// every(arr, function(val, idx, arr){
//   return val > 4;
// }); // false

// every(arr, function(val, idx, arr){
//   return idx < 5;
// }); // true

// every(arr, function(val, idx, arr){
//   return arr.indexOf(4) > -1;
// }); // true

// arr; // [1,2,3,4]


function every(arr, cb){
  // add whatever parameters you deem necessary - good luck!
  for(let i = 0; i < arr.length; i++){
    if(!cb(arr[i], i, arr)){
      return false;
    }
  }
  
  return true;
  
}