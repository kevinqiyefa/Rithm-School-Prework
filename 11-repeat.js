// Write a function called repeat, which accepts a string and a number and returns a new string with the string passed to the function repeated the number amount of times. Do not use the built in repeat method!

// Examples: 

// repeat('*', 3);// => '***' 
// repeat('abc', 2);// => 'abcabc' 
// repeat('abc', 0);// => ''


function repeat(str, n){
  // add whatever parameters you deem necessary - good luck!
  let s = "";
  for(let i = 0; i < n; i++){
    s+=str;
  }
  return s;
}