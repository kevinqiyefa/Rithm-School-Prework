// Write a function called rotateCounterClockWise that rotates an NxN array of arrays counter-clockwise. This problem is challenging so it will greatly help if you write/draw what the array looks like before and after it is rotated.

// rotateCounterClockwise([[1,2],[3,4]]) 
// // [ [ 2, 4 ], [ 1, 3 ] ]

// rotateCounterClockwise([[1,2,3],[4,5,6],[7,8,9]]) 
// // [ [ 3, 6, 9 ], [ 2, 5, 8 ], [ 1, 4, 7 ] ]

// rotateCounterClockwise([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]) 

// [ 
//     [ 4, 8, 12, 16 ],   
//     [ 3, 7, 11, 15 ],   
//     [ 2, 6, 10, 14 ],   
//     [ 1, 5, 9, 13 ] 
// ]

// rotateCounterClockwise([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20], [21,22,23,24,25]])
 
// [  
//    [ 5, 10, 15, 20, 25 ],   
//    [ 4, 9, 14, 19, 24 ],  
//    [ 3, 8, 13, 18, 23 ],   
//    [ 2, 7, 12, 17, 22 ],   
//    [ 1, 6, 11, 16, 21 ] 
// ]


function rotateCounterClockwise(arr){
  // add whatever parameters you deem necessary - good luck!
  let newArr =[];
  
  for(let i=0; i < arr.length; i++){
    let temp = [];
    for(let j=0; j < arr.length; j++){
      temp.push(arr[j][i]);
    }
    newArr.push(temp);
  }
  
  return newArr.reverse();
}


  