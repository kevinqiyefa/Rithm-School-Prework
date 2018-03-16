// Write a function called sameFrequency which accepts two numbers and returns true if they contain the same frequency of digits. Otherwise, it returns false.

// Examples:

// sameFrequency(551122,221515) // true
// sameFrequency(321142,3212215) // false
// sameFrequency(1212, 2211)// true


function sameFrequency(n1, n2){
  // add whatever parameters you deem necessary - good luck!
  
  //convert n1 and n2 into string
  //loop over the the string and convert the string into object
  //then check key and vaule if the same in both object.
  let obj1 = {};
  let obj2 ={};
  let longer,shoter;
  for(let i of String(n1)){
    obj1[i] = obj1[i]+1 ||1
  }
  
  for(let j of String(n2)){
    obj2[j] = obj2[j]+1 ||1
  }
  
  if (Object.keys(obj1).length > Object.keys(obj2).length){
    longer = obj1;
    shorter = obj2;
  } else {
    longer = obj2;
    shorter = obj1;
  }
  
  for(let k in longer){
    if (longer[k] !== shorter[k]) return false;
  }

  return true;
  
}