// Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

// Examples:

// var arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
//     {title: "Instructor", first: 'Matt', last:"Lane", isCatOwner: true}, 
//     {title: "Instructor", first: 'Michael', last:"Hueter"}, 
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
// ]
    
// hasCertainKey(arr,'first') // true
// hasCertainKey(arr,'isCatOwner') // false

// Try to solve this using some or every.


function hasCertainKey(arr, key){
  // add whatever parameters you deem necessary - good luck!
  return arr.every(x=>key in x);
}