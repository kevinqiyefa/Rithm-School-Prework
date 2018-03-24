// Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another element). If there are any duplicates, the function should return false.

// Examples:

// hasNoDuplicates([1,2,3,1]) // false
// hasNoDuplicates([1,2,3]) // true

// Try to solve this using some or every.


function hasNoDuplicates(arr){
  // add whatever parameters you deem necessary - good luck!
  return arr.every(x=>arr.indexOf(x)===arr.lastIndexOf(x));
}
