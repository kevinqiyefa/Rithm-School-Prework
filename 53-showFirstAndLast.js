// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

// Examples:

// showFirstAndLast(['elie','matt', 'michael'])
// // ["ee", "mt", "ml"]
// showFirstAndLast(['hi', 'goodbye', 'smile'])
// // ['hi', 'ge', 'se']

// Try to solve this using forEach.


function showFirstAndLast(arr){
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  
  arr.forEach(x=>{
    newArr.push(x[0]+x[x.length-1]);
  });
  
  return newArr;
}
