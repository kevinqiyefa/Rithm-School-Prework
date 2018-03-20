
// Write a function called nth, which accepts an array and a number and returns the element at whatever index is the number in the array. If the number is negative, the nth element from the end is returned. 

// You can assume that number will always be between the negative value of the array length, and the array length minus 1.

// Examples:

// nth(['a', 'b', 'c', 'd'], 1); // 'b' 
// nth(['a', 'b', 'c', 'd'], -2); // 'c';
// nth(['a', 'b', 'c', 'd'], 0); // 'a';
// nth(['a', 'b', 'c', 'd'], -4); // 'a';
// nth(['a', 'b', 'c', 'd'], -1); // 'd';
// nth(['a', 'b', 'c', 'd'], 3); // 'd';


function nth(arr, n){
  // add whatever parameters you deem necessary - good luck!
  if(n < 0) n=arr.length+n;
  return arr[n];
}