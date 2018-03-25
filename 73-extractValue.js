// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at that key. If there is no value at that key, no value should be placed in the output array.

// Examples:

// var arr = [
//   {firstName: 'Elie', lastName: 'Schoppik'},
//   {firstName: 'Matt', lastName: 'Lane', dogOwner: true},
//   {firstName: 'Michael', lastName: 'Hueter'}
// ]

// extractValue(arr,'firstName') // ['Elie', 'Matt', 'Michael']
// extractValue(arr, 'lastName') // ['Schoppik', 'Lane', 'Hueter']
// extractValue(arr, 'dogOwner') // [true]
// extractValue(arr, 'ferretOwner') // []

// Try to solve this using reduce.


function extractValue(arr, key){
  // add whatever parameters you deem necessary - good luck!
  return arr.reduce((t,x)=>{
    if(key in x) t.push(x[key]);
    return t;
  },[]) 
}