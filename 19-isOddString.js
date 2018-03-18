// Write a function called isOddString which returns true if the sum of each character's position in the alphabet is odd. For example, 'a' is in the first position, 'b' is in the second position, and so on. If the sum is even, return false.

// Examples:

// isOddString('a') // true
// isOddString('aaaa') // false
// isOddString('amazing') // true
// isOddString('veryfun') // true
// isOddString('veryfunny') // false

function isOddString(str){
  // add whatever parameters you deem necessary - good luck!-  
  
  let s = str.toLowerCase();
  let total = 0;
  for(let i = 0; i < str.length; i++){
    total += s[i].charCodeAt(0)-96;
  }
  
  return total%2 === 1;
  
}