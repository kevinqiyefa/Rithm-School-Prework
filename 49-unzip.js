// Write a function called unzip, which accepts an array of grouped elements and returns a new an array, which regroups the elements to their pre-zip configuration.

// Examples:

// unzip([[1,2],[3,4]])
// // [[1,3],[2,4]]

// unzip([['a', 1, true], ['b', 2, false]] );
// // [['a', 'b'], [1, 2], [true, false]]

// unzip([['a'],['b'],['c']]);
// // [['a','b','c']]



function unzip(arr){
  let newArr = [];

  for(let i = 0; i < arr[0].length; i++){
    let subArr = [];
    for(let j = 0; j < arr.length; j++){
      subArr.push(arr[j][i]);
    }
    newArr.push(subArr);
  }
  
  return newArr;
}