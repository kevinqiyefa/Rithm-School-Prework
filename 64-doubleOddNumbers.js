// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers in the input array doubled. (HINT - you can use map and fitler to double and then filter the odd numbers).

// Examples:

// doubleOddNumbers([3,1,1,3]) // [6,2,2,6]
// doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
// doubleOddNumbers([4,4,4,4,4]) // []

// Try to solve this using map and filter together!


function doubleOddNumbers(arr){
  // add whatever parameters you deem necessary - good luck!
  
  return arr.filter(x=>x%2 !==0).map(y=>y*2);
}