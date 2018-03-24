// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowels and the values as the number of times the vowel appears in the string. This function should be case insensitive, so a lowercase letter and uppercase letter should both count.

// Examples:

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you')
// // {i: 1, a: 4, e: 3, o: 3, u: 1};

// Try to solve this using reduce.


function vowelCount(str){
  // add whatever parameters you deem necessary - good luck!
  let vowel = "aeiou";
  return str.toLowerCase().split("").reduce((t,x)=>{
      if(vowel.includes(x)) t[x] = t[x]+1 || 1;
  
      return t;
  },{});
}
