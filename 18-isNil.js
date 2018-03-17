// Write a function called isNil, which should return true if the input is null or undefined.

// isNil(null) // true
// isNil(NaN) // false
// isNil([]) // false
// isNil(false) // false
// isNil(undefined) // true
// isNil() // true

function isNil(val){
  // add whatever parameters you deem necessary - good luck!
  
  return val == null;
}
