// Write a function called hasCertainValue which accepts an array of objects, a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise, it should return false.

// Examples:

// var arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
//     {title: "Instructor", first: 'Matt', last:"Lane", isCatOwner: true}, 
//     {title: "Instructor", first: 'Michael', last:"Hueter"}, 
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
// ]

// hasCertainValue(arr,'title','Instructor') // true
// hasCertainValue(arr,'first','Elie') // false

// Try to solve this using some or every.


function hasCertainValue(arr, key, val){
  // add whatever parameters you deem necessary - good luck!
  
  return arr.every(x=>x[key]===val);
}