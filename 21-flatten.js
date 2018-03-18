// Write a function called flatten, which flattens an array a single level deep. In other words, if you have one level of nesting in your arrays, it will remove this one level of nesting.

// flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
// flatten([[1], [2]]); // [1, 2]
// flatten([1, [2, [3, [4]], 5]]); // [1, 2, [3, [4]], 5]


function flatten(arr){
  // add whatever parameters you deem necessary - good luck!  
  return [].concat(...arr);
}