// Given two strings, write a function to determine if the second string is an anagram of the first.  An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples: 

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// Note: You may assume the string contains only lowercase characters.

// Bonus: If you used nested loops to solve this problem, try it without nested loops!


function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  
  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");
  
  return s1===s2;

}