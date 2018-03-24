// Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number. Otherwise, it returns false.

// Examples:

// hasOddNumber([1,2,2,2,2,2,4]) // true
// hasOddNumber([2,2,2,2,2,4]) // false

// Try to solve this using some or every.


function hasOddNumber(arr){
  // add whatever parameters you deem necessary - good luck!
  return arr.some(x=>x%2===1);
}