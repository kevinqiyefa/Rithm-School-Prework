// Please implement the following functions:

// 1. Hamming Distance 

// (https://en.wikipedia.org/wiki/Hamming_distance).

// This function takes in two strings of equal length, and calculates the distance between them. Here, "distance" is defined as the number of characters that differ at the same position. The function should ignore case.

// If the inputs do not have the same length, the function should return "Input strings must have the same length."

// Examples:

// hammingDistance("hello", "jello") // 1
// hammingDistance("cool", "kewl") // 3
// hammingDistance("sweet", "Sweet") // 0
// hammingDistance("yoyo", "yoyoyo") // "Input strings must have the same length."

// 2. oneCharDifference

// This function checks whether there two strings differ by a single character.  The difference may consist of one character being added, removed, or replaced, in which case the function must return true. In all other cases it must return false. As with hammingDistance, this function should ignore case. Examples:  

// oneCharDifference("grate", "grape") // true 
// oneCharDifference("male", "maple") // true 
// oneCharDifference("help", "helping") // false
// oneCharDifference("boom", "boo") // true
// oneCharDifference("same", "same") // false


function hammingDistance(str1, str2) {
  // good luck. add any arguments you think are necessary.
  let count = 0;
  let s1 = str1.toLowerCase();
  let s2 = str2.toLowerCase();
  
  if(str1.length !== str2.length){
    return "Input strings must have the same length.";
  }else{
    for(let i = 0; i < s1.length; i++){
      if(s1[i] !== s2[i]) count++;
    }
  }
  
  return count;
}

function oneCharDifference(str1,str2) {
  // good luck. add any arguments you think are necessary.
  let shortest, longest;
  let count = 0;
  let temp=0;
  
  if (str1.length < str2.length){
    shortest = str1.toLowerCase();
    longest = str2.toLowerCase();
  } else {
    shortest = str2.toLowerCase();
    longest = str1.toLowerCase();
  }
  
  //same length
  if(str1.length === str2.length){
    return hammingDistance(str1, str2)===1;
  }

  //different by one
  if(longest.length-shortest.length===1){
    for(let i = 0; i < longest.length ; i++){
      longest[i] !== shortest[temp]? count++ : temp++;
    }
    return count === 1;
  } else{  //different more than one
    return false;
  }
  
  
}

