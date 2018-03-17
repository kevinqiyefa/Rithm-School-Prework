// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

// Don't use indexOf to implement this function!

// Examples:

// linearSearch([1,2,3,4,5],2) // 1
// linearSearch([1,2,3,4,5],3) // 2
// linearSearch([1,2,3,4,5],5) // 4
// linearSearch([1,2,3,4,5],6) // -1


function linearSearch(arr, val){
  // add whatever parameters you deem necessary - good luck!
  for(let i = 0; i < arr.length; i++){
    if(arr[i]===val) return i;
  }
  return -1;
}