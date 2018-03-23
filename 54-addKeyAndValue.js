// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added to each object. 

// Examples:

// addKeyAndValue([{foo: 'bar'}, {baz: 'woah'}], 'a', 'b');
// // [{foo: 'bar', a: 'b'}, {baz: 'woah', a: 'b'}]

// addKeyAndValue([
//   {name: 'Elie'},
//   {name: 'Michael'},
//   {name: 'Matt'}
// ], 'title', 'instructor');

// // [
// //   {name: 'Elie', title:'instructor'},
// //   {name: 'Michael', title:'instructor'},
// //   {name: 'Matt', title:'instructor'}
// // ]

// Try to solve this using forEach.


function addKeyAndValue(arr, key, val){
  // add whatever parameters you deem necessary - good luck!

  arr.forEach(x=>{
    x[key] =val;
  });
  
  return arr;
}
