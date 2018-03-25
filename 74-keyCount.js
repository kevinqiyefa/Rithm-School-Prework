// Write a function called keyCount which accepts an array of objects and returns an object with a count of how many times each key appears in the array of objects.

// Examples:

// keyCount([
//   { name: "Elie", catOwner: false },
//   { name: "Moxie", isCat: true }
// ]) // { name: 2, catOwner: 1, isCat: 1}

// keyCount([
//   { age: 1, eyeColor: "blue" },
//   { age: 3, eyeColor: "brown" },
//   { age: 7, inSchool: true }
// ]) // { age: 3, eyeColor: 2, inSchool: 1 }

// Try to solve this using reduce.

function keyCount(arr){
  // add whatever parameters you deem necessary - good luck!
  return arr.reduce((t,x)=>{
    for(let key in x){
      t[key] = t[key]+1 ||1;
    }
    return t;
  }, {});
}