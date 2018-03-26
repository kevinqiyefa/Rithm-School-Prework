// Write a function called snail which accepts an n x n array (an array of arrays where each subarray has the same length) and returns the array elements arranged from outermost elements to the middle element, traveling clockwise.


// snail([[1,2,3],[4,5,6],[7,8,9]] ) // [1,2,3,6,9,8,7,4,5]


// snail([[1,2,3],[8,9,4],  [7,6,5]]) // [1,2,3,4,5,6,7,8,9]


// snail([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]) 
// // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]



function snail(arr){
  // add whatever parameters you deem necessary - good luck!
  
  let newArr =[];
  while(arr.length > 0){
    //grab the first row
    newArr = newArr.concat(arr.splice(0,1)[0]);
    
    //grab the last column
    for(let i = 0; i < arr.length; i++){
      newArr = newArr.concat(arr[i].splice(arr.length));
    }
 
    //grab the last row

    var temp = [].concat(...arr.splice(arr.length-1)).reverse();
    newArr = newArr.concat(temp);
    
    
    //grab the first column
    for(let i = arr.length-1; i >= 0; i--){
      newArr = newArr.concat(arr[i].splice(0,1));
    }
  
  }
 
  
  return newArr;
}
