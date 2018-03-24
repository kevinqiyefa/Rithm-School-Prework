// Write a function called filterByKey which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

// Examples:

// filterByKey([
//   {num1: 3, num2: 5},
//   {num2: 4, num3: 1, num5: 1},
//   {num3: 3}
// ], 'num3');
// // [
// //   {num2: 4, num3: 1, num5: 1},
// //   {num3: 3}
// // ]

// filterByKey([
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Matt', last:"Lane", isCatOwner: true},
//   {first: 'Michael', last:"Hueter"},
//   {first: 'Colt', last:"Steele", isCatOwner: true}
// ],'isCatOwner'); 
// // [
// //   {first: 'Matt', last:"Lane", isCatOwner: true},
// //   {first: 'Colt', last:"Steele", isCatOwner: true}
// // ]

// Try to solve this using filter.


function filterByKey(arr, key){
  // add whatever parameters you deem necessary - good luck!
  return arr.filter(x=>key in x);
}

