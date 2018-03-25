// Write a function called swap, which accepts an array and two numbers. The function should return the array with the values at each number swapped. The function should not create a new array. You can assume that each number will be within the range of 0 and the length of the array. 

// Examples:

// var arr = [1,2,3,4]
// swap(arr, 0, 2) // [3,2,1,4]
// arr // [3,2,1,4]

// var arr2 = [5,6,8,7]
// swap(arr2, 2, 3) // [5,6,7,8]
// arr2 // [5,6,7,8]


function swap(arr, idx1, idx2){
  // add whatever you parameters you deem necessary, good luck!
  [arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]]
  return arr;
}
