// Write a function called twoArrayDifference which accepts two arrays and returns an array of all of the values in the first that are not the second array. The returned array should preserve the order of elements from the first array. 

// Examples:

// twoArrayDifference([1,2,1], [2]); // [1, 1]
// twoArrayDifference([1,2,1], [1]); // [2]
// twoArrayDifference([2,3,4,5], [2,5]); // [3, 4]
// twoArrayDifference([2,3,4,5], [6,7,8]); // [2,3,4,5]
// twoArrayDifference([2,3,4,5], [2,3,4,5,6]); // []


function twoArrayDifference(arr1, arr2){
  // add whatever parameters you deem necessary - good luck!
  
  //Here's a way by changing the original arr1
  // for(let i of arr2){
  //   while (arr1.indexOf(i) !== -1) {
  //     arr1.splice(arr1.indexOf(i),1);
  //   }
  // }
  
  // return arr1;
  
  
  return arr1.filter(x=>arr2.indexOf(x)===-1);
  
}