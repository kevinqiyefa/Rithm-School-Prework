// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

// Examples:

// removeVowels('Elie') // 'l'
// removeVowels('hELLO') // 'hll'
// removeVowels('ZZZZZZ') // 'zzzzzz'

// Try to solve this using filter.


function removeVowels(str){
  // add whatever parameters you deem necessary - good luck!
  let vowels = "aeiou";
  return str.toLowerCase().split("").filter(x=>!vowels.includes(x)).join("");
  
}
