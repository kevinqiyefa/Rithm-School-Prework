// Given two sorted arrays, write a function called mergeSortedArrays which accepts two arrays and returns a new array with both of the values from each array sorted. 

// As a bonus, try to implement this without using the built-in sort method.

// var arr1 = [1,3,4,5];
// var arr2 = [2,4,6,8];
// mergeSortedArrays(arr1,arr2) // [1,2,3,4,4,5,6,8]


// arr1 // [1,3,4,5];
// arr2 // [2,4,6,8];


// var arr3 = [-2,-1,0,4,5,6];
// var arr4 = [-3,-2,-1,2,3,5,7,8];


// mergeSortedArrays(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]


// arr3 // [-2,-1,0,4,5,6];
// arr4 // [-3,-2,-1,2,3,5,7,8];


// var arr5 = [3,4,5]
// var arr6 = [1,2]


// mergeSortedArrays(arr5,arr6) // [1,2,3,4,5]



function mergeSortedArrays(arr1, arr2){
  // add whatever parameters you deem necessary - good luck! 
  let count1 = 0, count2 = 0;
  let arr = [];
  
  while(count1 < arr1.length || count2 < arr2.length){
    if(arr1[count1] < arr2[count2] || count2===arr2.length){
      arr.push(arr1[count1++]);
    } else {
      arr.push(arr2[count2++]);
    }
  }
  
  return arr;
}
