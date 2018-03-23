// Write a function called zip which accepts an arbitrary number of arrays, and creates an array of grouped elements, the first of which contains the first elements of the input arrays, the second of which contains the second elements of the input arrays, and so on.

// Examples:

// zip([1,2],[3,4]) // [[1, 3], [2, 4]

// zip(['a', 'b'], [1, 2], [true, false]); 
// // [['a', 1, true], ['b', 2, false]]

// zip(['w','x','y','z']) // [['w'], ['x'], ['y'], ['z']]

// zip(['a', 'b','c'], [1, 2], [true, false])
// //[['a', 1, true], ['b', 2, false], ['c', undefined, undefined]]


function zip(...arrs){
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  for(let i = 0; i < arrs[0].length; i++){
    let nestArr = [];
    for(let j = 0; j < arrs.length; j++){
      nestArr.push(arrs[j][i]);
    }
    newArr.push(nestArr);
  }
  
  return newArr;
}