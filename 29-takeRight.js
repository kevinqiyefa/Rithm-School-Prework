// Write a function called takeRight which accepts an array and an optional value and creates a copy of the array starting from the end for the value number of elements. If a value is not passed the function should return an array with the last element. If the second parameter is greater than the length of the array, return a copy of the entire array. 

// takeRight([1, 2, 3]); // [3] 
// takeRight([1, 2, 3], 2); // [2, 3] 
// takeRight([1, 2, 3], 5); // [1, 2, 3] 
// takeRight([1, 2, 3], 0); // []


function takeRight(arr, n=1){
  // add whatever parameters you deem necessary - good luck! 
  if(n === 0) return [];
  if(n>arr.length) return arr.slice();
  return arr.slice(-n);
  
}