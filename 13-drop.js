// Write a function called drop which accepts an array and optional number and returns a new array with the number of elements dropped from the beginning. If the number is greater than the length of the array, return an empty array and if there is no second parameter, return a slice starting from the first index to the end of the array.

// Since drop returns a new array, it should not mutate the original array.

// Examples:

// drop([1,2,3]) // [2,3]
// drop([1,2,3],2) // [3]
// drop([1,2,3],10) // []
// drop([1,2,3],0) // [1,2,3]

// var arr = [1,2,3];
// drop(arr,2)

// arr // [1,2,3]



function drop(arr, n=1){
  // add whatever parameters you deem necessary - good luck
  
  return arr.slice(n);
}