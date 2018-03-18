// Write a function called clamp, which accepts three parameters: a number, a lower bound, and an upper bound. The function should return the number if it is in between the lower and upper bounds. Otherwise, the function should return lower if number is less than lower, or upper if number is greater than upper.

// Examples:

// clamp(-10, -5, 6); // -5 
// clamp(10, -2, 5); // 5
// clamp(2, -5, 5); // 2
// clamp(-2, -5, 5); // -2
// clamp(0, 0, 0); // 0


function clamp(num, lower, upper) {
  return Math.min(Math.max(num, lower), upper);
}