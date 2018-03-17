// Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.

// The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.

// Examples:

// includes([1, 2, 3], 1) // true 
// includes([1, 2, 3], 1, 2) // false 
// includes([1, 2, 3], 6) // false
// includes({ 'a': 1, 'b': 2 }, 1) // true 
// includes({ 'a': 1, 'b': 2 }, 'a') // false
// includes('abcd', 'b') // true
// includes('abcd', 'e') // false
// includes('abcd', 'a', 2) // false

function includes(c, val, idx = 0){
  // add whatever parameters you deem necessary - good luck!  
  
  //check if c is object(not array) or not, if yes then check the val is in object.value
  if(typeof c === "object" && !Array.isArray(c)){
    for(let key in c){
      if(c[key]===val){
        return true;
      }
    }
    return false;
  }else {
    
    //if c is string or array, then loop over the c and check if the val in the c that start with the idx.
    for(let i = idx; i < c.length; i++){
      if(c[i]===val){
        return true;
      }
    }
    return false;
  }
}
