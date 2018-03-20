// Write a function called upperFirst, which converts the first character of an input string to upper case.

// upperFirst('fred'); // 'Fred' 
// upperFirst('FRED'); // 'FRED'
// upperFirst(''); // ''
// upperFirst('only first character'); // 'Only first character'


function upperFirst(str){
  // add whatever parameters you deem necessary - good luck!
  
  if (str === "") return "";
  return str[0].toUpperCase() + str.slice(1);
}

