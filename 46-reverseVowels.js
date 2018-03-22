// Write a function called reverseVowels which accepts a string and reverses the vowels in the string. 

// Examples:

// reverseVowels('amazing') // "imazang"
// reverseVowels('awesome') // "ewosema"
// reverseVowels('Rithm School') // "Rothm Schoil"


function reverseVowels(str){
  // add whatever parameters you deem necessary - good luck!
  
  let v = "aeiouAEIOU";
  let newStr = "";
  let vIdx = 0;
  let vInStr = str.split("").filter(x=>v.includes(x)).reverse();
  console.log(vInStr);
  
  
  for(let i = 0; i < str.length; i++){
    if(v.includes(str[i])){
      newStr += vInStr[vIdx++];
      
    } else {
      newStr += str[i];
    }
  }
 
  return newStr;
}