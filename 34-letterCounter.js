// Write a function called letterCounter which accepts a string and returns a function. When the inner function is invoked it should accept a parameter which is a letter, and the inner function should return the number of times that letter appears. This inner function should be case insensitive.

// Examples: 

// var counter = letterCounter('Amazing')
// counter('a') // 2
// counter('m') // 1

// var counter2 = letterCounter('This Is Really Fun!')
// counter2('i') // 2
// counter2('t') // 1 


function letterCounter(str){
  // add whatever parameters you deem necessary - good luck!
  return function count(char){
    return str.toLowerCase().split(char).length-1;
  }
}
