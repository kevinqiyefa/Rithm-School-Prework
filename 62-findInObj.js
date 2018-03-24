// Write a function called findInObj which accepts an array of objects, a key, and some value to search for, and returns the first found value in the array. If no match is found, return undefined.

// Examples:

// var people = [
//   { firstName: "Matt", lastName: "Lane" },
//   { firstName: "Elie", lastName: "Schoppik" },
//   { firstName: "Michael", lastName: "Hueter" },
//   { firstName: "Michael", lastName: "Bolton" }
// ];

// findInObj(people, "lastName", "Lane"); 
// // { firstName: "Matt", lastName: "Lane" }

// findInObj(people, "firstName", "Michael");
// // { firstName: "Michael", lastName: "Hueter" }

// findInObj(people, "firstName", "Tim"); // undefined
// findInObj(people, "notAKey", "notAValue"); // undefined


function findInObj(arr, key, val){
  // add whatever parameters you deem necessary - good luck!
  return arr.find(x=>x[key]===val);
}
