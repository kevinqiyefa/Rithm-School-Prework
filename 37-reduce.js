// Write a function called reduce which accepts an array, a callback function, and an initial value. Reduce should iterate over the input array and accumulate a value based on the return value of the callback.

// The callback should accept as arguments the current accumulated value, the current array value, and the current array index. After each iteration, the return value from the callback becomes the new accumulator value. When the iteration is finished, reduce should return the final accumulated value.

// If value is provided, it is the first value in the accumulator. If no value is provided, the first element in the array should be the initial value, and process of accumulation using the callback should start from the second element in the array.

// reduce([1,2,3,4,5], function(accumulator, nextValue){
//    return accumulator + nextValue;
// }, 0); // 15

// reduce([1,2,3,4,5], function(accumulator, nextValue){
//    return accumulator + nextValue;
// },10); // 25

// reduce([2, 4, 1, 5, 3], function(accumulator, nextValue, idx){
//    return accumulator + (nextValue < idx ? nextValue : 0);
// }, 0); // 4

// reduce(['Elie', 'Matt', 'Tim', 'Michael'], function(accumulator, nextValue){
//    return accumulator += ' ' + nextValue;
// },'The instructors are');
// // 'The instructors are Elie Matt Tim Michael'

// reduce([1,2,3,4,5], function(accumulator, nextValue){
//    return accumulator + nextValue;
// }); // 15

// reduce(['Elie', 'Matt', 'Tim', 'Michael'], function(accumulator, nextValue){
//    return accumulator += ' ' + nextValue;
// }); // 'Elie Matt Tim Michael'


function reduce(arr, cb, iniVal){
  // add whatever parameters you deem necessary - good luck!
  
  let result;
  let counter=0;

  if(iniVal !== undefined){
    result = iniVal;
  } else {
    result = arr[0];
    counter++;
  }

  while(counter < arr.length){
    result = cb(result, arr[counter], counter);
    counter++;
  }
  
  return result;
}
