// Write a function called filter which accepts an array and a callback. The function should return a new array consisting of elements from the original array that return truthy values when passed into the callback. Also, the original array should not be affected.

// Examples:

// var arr = [ 1, 2, 3, 4 ];

// filter(arr, function(value) {
//   return value % 2 === 0;
// }); // [2,4]

// filter(arr, function(value) {
//   return value > 2;
// }); // [3,4]

// filter(arr, function(value) {
//   return value < 0;
// }); // []

// arr; // [ 1, 2, 3, 4 ]


function filter(arr, cb){
  // add whatever parameters you deem necessary - good luck!
  
  let newArr = [];
  for(let i of arr){
    if(cb(i)){
      newArr.push(i);
    }
  }
  
  return newArr;
  
}