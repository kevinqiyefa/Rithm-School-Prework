// Write a function called findFactors which accepts a number and returns an array of all of the numbers which it is divisible by starting from 1 and going up to the number.

// Examples:

// findFactors(10) // [1,2,5,10]
// findFactors(11) // [1,11]
// findFactors(30) // [1,2,3,5,6,10,15,30]
// findFactors(111) // [1,3,37,111]
// findFactors(321421) // [1,293,1097,321421]
// findFactors(412146) // [1,2,3,6,7,9,14,18,21,42,63,126,3271,6542,9813,19626,22897,29439,45794,58878,68691,137382,206073,412146]


function findFactors(num){
  // add whatever parameters you deem necessary - good luck!
  
  let arr = [...Array(num).keys()].map(x=>x+1);
  return arr.filter(y=>num%y===0);
  
}
