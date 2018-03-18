// Write a function called omit, which accepts an object and an array of keys and returns a new object with the keys from the array omitted. If an array element doesn't correspond to a valid key, the element is simply ignored.

// var object = { 'a': 1, 'b': 2, 'c': 3 }; 
// omit(object, ['a', 'c']); // { 'b': 2 }
// omit(object, ['b', 'c']); // { 'a': 1 }

// omit(object, ['a', 'd']); // { 'b': 2, 'c': 3 }
// omit(object, ['d', 'e', 'f']); // { 'a': 1, 'b': 2, 'c': 3 }


function omit(obj, arr){
  // add whatever parameters you deem necessary - good luck!  
  
  let newObj = {};
  for(let key in obj){
    if(!arr.includes(key)){
      newObj[key]=obj[key];
    }
  }
  
  return newObj;
}