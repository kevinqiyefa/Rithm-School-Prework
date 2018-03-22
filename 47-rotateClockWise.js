
// Write a function called rotateClockWise that rotates an NxN array of arrays clockwise, instead of counterclockwise. This problem is challenging so it will greatly help if you write/draw what the array looks like before and after it is rotated.

// Examples: 

// rotateClockwise([[1,2],[3,4]]) 
// // [ [ 3, 1 ], [ 4, 2 ] ]

// rotateClockwise([[1,2,3],[4,5,6],[7,8,9]]) 
// // [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

// rotateClockwise([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]) 

// [ 
//     [ 13, 9, 5, 1 ],   
//     [ 14, 10, 6, 2 ],   
//     [ 15, 11, 7, 3 ],   
//     [ 16, 12, 8, 4 ] 
// ]


// rotateClockwise([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20], [21,22,23,24,25]])
 
// [  
//    [ 21, 16, 11, 6, 1 ],   
//    [ 22, 17, 12, 7, 2 ],  
//    [ 23, 18, 13, 8, 3 ],   
//    [ 24, 19, 14, 9, 4 ],   
//    [ 25, 20, 15, 10, 5 ] 
// ]


function rotateClockwise(arr){
  // add whatever parameters you deem necessary - good luck!
  
  let newArr =[];
  let a = arr.reverse();
  
  for(let i=0; i < a.length; i++){
    let temp = [];
    for(let j=0; j < a.length; j++){
      temp.push(a[j][i]);
    }
    newArr.push(temp);
  }
  
  return newArr;
}
