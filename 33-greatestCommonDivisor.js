// Write a function called greatestCommonDivisor which accepts two whole numbers and returns the greatest common divisor between both numbers. The greatest common divisor of two whole numbers is the largest whole number that divides both numbers evenly.

// Examples:

// greatestCommonDivisor(3,20) // 1
// greatestCommonDivisor(8,12) // 4
// greatestCommonDivisor(20,100) // 20
// greatestCommonDivisor(30,48) // 6
// greatestCommonDivisor(66,242) // 22
// greatestCommonDivisor(1324,2648) // 1324


function greatestCommonDivisor(num1, num2){
  // add whatever parameters you deem necessary - good luck!
  let small;
  num1 < num2 ? small = num1:small = num2;

  while(small>1){
    if(num1 % small === 0 && num2 % small === 0){
      break;
    }
    small--;
  }
  return small;
}