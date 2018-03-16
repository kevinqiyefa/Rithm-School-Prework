// Write a function called take which accepts an array and an optional value and creates a copy of the array starting from the beginning for the value number of elements. If a value is not passed the function should return an array with the first element. If the second parameter is greater than the length of the array, return a copy of the entire array.

// Examples:

// take([1, 2, 3]) // [1]
// take([1, 2, 3], 1) // [1]
// take([1, 2, 3], 2) // [1, 2]
// take([1, 2, 3], 5) // [1, 2, 3]
// take([1, 2, 3], 0) // []


function take(arr, n=1){
  // add whatever parameters you deem necessary - good luck
  
  let result = [];
  
  //set the array length to n if the n > arr length.
  if(n > arr.length) n = arr.length;
  
  //loop over the array then insert the number(from 0 to n) to a new array
  for(let i = 0; i < n; i++){
    result.push(arr[i]);
  }
  return result;
}