//Write a function
//input is a positive integer represented by (n)
//output is a right triangle, the side of triangle has n (asterisk)
//hypotenuse(longest side of the triangle) starts from lower left
// to the triangle's upper right

//i have to use padstart() for the whitespace
//function name is triangle
//I'll assume the argument is a positive integer
// initialize a variable that contains '*'
// intialize a variable that contains a number that I can use for padstart
// the number for padstart decrements
// the number of * increments

function triangle(n) {
  let star = '*';
  let rowCount = n;
  
  while (rowCount > 0) {
    console.log(`${star.padStart(n, ' ')}`);
    star += '*';
    rowCount -= 1;
  }
}

triangle(5);
triangle(9);