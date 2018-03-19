// Writ a function called createMatrix which takes in two whole numbers, n and m, and creates a two-dimensional array with n columns and m rows. All of the values inside of your array should be 0.

// Examples:

// createMatrix(2,2) // [[0,0],[0,0]]
// createMatrix(3,2) // [[0,0,0],[0,0,0]]
// createMatrix(3,4) // [[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
// createMatrix(5,4) // [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]



function createMatrix(n, m){
  // add whatever parameters you deem necessary - good luck!  
  let arr =[];
  for(let i = 0; i < m; i++){
    let temp=[];
    for(let j = 0; j < n; j++){
      temp.push(0);
    }
    arr.push(temp);
  }
  
  return arr;
}