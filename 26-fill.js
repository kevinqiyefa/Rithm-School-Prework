// Write a function called fill that accepts an array and a value and returns the same array with each slot in the array filled with the value passed to fill.

// Examples:

// var arr = [1,2,3]
// fill(arr,"y")

// arr // ["y","y","y"]

// fill([undefined, undefined, null, false],"1") // ["1","1","1","1"]
// fill([2,3,1,95],4) // [4,4,4,4]
// fill([1,2,3,4,5],5) // [5,5,5,5,5]


function fill(arr, val){
  // add whatever parameters you deem necessary - good luck!

  for(let i=0; i < arr.length; i++){
    arr[i] = val; 
  }
  return arr;
}