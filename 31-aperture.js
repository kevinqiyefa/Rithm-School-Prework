// Write a function called aperture which accepts a number and an array and returns a new array. The new array should be composed of subarrays the size of the number with consecutive elements. If the number passed to this function is greater than the length of the array or less than 1, an empty array is returned.

// Examples:

// aperture(0, [1, 2, 3, 4, 5]); // []
// aperture(1, [1, 2, 3, 4, 5]); // [[1], [2], [3], [4], [5]]
// aperture(2, [1, 2, 3, 4, 5]); // [[1, 2], [2, 3], [3, 4], [4, 5]]
// aperture(3, [1, 2, 3, 4, 5]); // [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
// aperture(4, [1, 2, 3, 4, 5]); // [[1, 2, 3, 4], [2, 3, 4, 5]]
// aperture(5, [1, 2, 3, 4, 5]); // [[1, 2, 3, 4, 5]]
// aperture(6, [1, 2, 3, 4, 5]); // []



function aperture(num, arr){
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  let idx = 0;
  let limit;
  num ===0 ? limit= 0 : limit=arr.length+1 - num;
  while(idx < limit){
    newArr.push(arr.slice(idx,idx+num));
    idx++;
  }

  return newArr;
}

