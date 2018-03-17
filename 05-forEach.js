// Write a function called forEach, which accepts an array and a callback. forEach should iterate through the array and run a callback function for each value in the array. The callback should accept as its first argument the current array element, and as its second element the current array index. Also, forEach should always return undefined.

// Examples:

// var emptyArr = []
// forEach([1,2,3,4], function(val){
//   emptyArr.push(val*10);
// });
// emptyArr; // [10,20,30,40]

// var arr = [1,2,3];
// forEach(arr, function(val, idx){
//   arr[idx] += 5;
// });
// arr; // [6,7,8]

// var isUndefined = forEach(["a","b","c"], function(){
//   return "hi";
// });
// isUndefined; // undefined

function forEach(array, callback){
  // add whatever parameters you deem necessary - good luck!
  
  //iterate through the array and run a callback function for each value in the array.
  for(let i=0; i< array.length; i++){
    callback(array[i], i);
  }

}
