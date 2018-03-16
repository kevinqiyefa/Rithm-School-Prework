// Write a function called rangeInArray which accepts an array and start and end indices, and returns the sum of the values between (and including) the start and end index. 

// If a start parameter is not passed in, it should default to zero. If an end parameter is not passed in, it should default to the last value in the array. Also, if the end argument is too large, the sum should still go through the end of the array.

// Examples:

// rangeInArray([1,2,3,4],0,2) // 6
// rangeInArray([1,2,3,4],0,3) // 10
// rangeInArray([1,2,3,4],1) // 9
// rangeInArray([1,2,3,4]) // 10
// rangeInArray([1,2,3,4],0,100) // 10
// rangeInArray([],0,1) // 0




function rangeInArray(arr, start=0, end=arr.length-1){
  // add whatever parameters you deem necessary - good luck!
  
  //initialize the sum = 0
  let sum = 0;

  //if the end argument is too large, the sum should still go through the end of the array.
  if(end > arr.length) end=arr.length-1;
  console.log(end);
  //loop over the arr and all the number between and including) the start and end index
  for(let s = start; s <= end; s++){
    sum += arr[s];
  }
  
  return sum;
  
}
