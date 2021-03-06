// Write a function called zipObject which accepts two arrays, one of property identifiers and one of corresponding values. It returns an object with the keys from one array and values from another. If the first array is longer than the second, the value in the object should be undefined. If the second array is longer, ignore the additional values in the second array.

// Examples:

// zipObject(['a', 'b'], [1, 2]) 
// // { a: 1, b: 2 }

// zipObject(['a', 'b','c','d'], [1, 2, 3]) 
// // {a: 1, b: 2, c: 3, d: undefined}

// zipObject(['a','b','c'], [1, 2, 3, 4])
// // {a: 1, b: 2, c: 3}


function zipObject(arr1, arr2){
  // add whatever parameters you deem necessary - good luck!  
  let newObj = {};
  
  for(let i = 0; i < arr1.length; i++){
    newObj[arr1[i]] = arr2[i];
  }
  
  return newObj;
  
}
