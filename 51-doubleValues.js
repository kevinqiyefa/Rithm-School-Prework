// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled.

// Examples:

// doubleValues([1,2,3]) // [2,4,6]
// doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

// Try to solve this using forEach.


function doubleValues(arr){
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  arr.forEach(x=>newArr.push(x*2));
  return newArr;
}

