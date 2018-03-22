// Write a function called binaryToDecimal which accepts a string of zeros and ones and returns the decimal value. Do not use parseInt!

// Examples:

// binaryToDecimal('1') // 1
// binaryToDecimal('101') // 5
// binaryToDecimal('1001') // 9
// binaryToDecimal('10001') // 17
// binaryToDecimal('10011101101') // 1261
// binaryToDecimal('100010101010101010101') // 1135957


function binaryToDecimal(str){
  // add whatever parameters you deem necessary - good luck
  let r = 0;
  for(let i = 0; i < str.length; i++)
  {
    r = r * 2 + (str[i] == '1' ? 1 : 0);
  }

  return r;
  
}