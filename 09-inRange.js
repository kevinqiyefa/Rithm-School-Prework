// Write a function called inRange, which takes in number n, start, and end, and checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped.

// Examples:

// inRange(3, 2, 4); // true 
// inRange(0, -10, 10); // true
// inRange(5, 0, 3); // false

// inRange(4, 8); // true 
// inRange(4, 2); // false 
// inRange(2, 2); // false 
// inRange(1.2, 2); // true 
// inRange(5.2, 4); // false 

// inRange(5, 6, 4); // true
// inRange(-3, -2, -6); // true
// inRange(10, 100, -5); // true
// inRange(10, 10, -5); // false


function inRange(n, start, end=start){
  // add whatever parameters you deem necessary - good luck!  
  let temp;
  if (end === start)  start = 0;
  if (start > end){
    temp = start;
    start = end;
    end = temp;
  }
  
  if(start < n && n < end){
    return true;
  }
  return false;
  
}
