//Write a function that accepts three arguments
// each argument is a number between 0 to 100
//no need to check for values greated than 100
//no need to check for negative values
//return value must be the mean/average of the 3 numbers passed corresponding to Grade Letter

//Do i need to check for string and other data types?
//How do you get the average of 3 numbers
  // sum of the numbers,
  //divided by total numbers in the set
//If there are decimals involved in the equations I will just round up (Math.round)

//Grade Letters:
// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

//I'll write a function that checks if the arguments passed are numbers
//use Number.isInteger()
//if argument is an integer return true
//if not then false

//function that contains logic for grade letters
//if the score is greater than or equal to 90 AND less than or equal to 100 return 'A'
//if the score is greater than or equal to 80 AND less than 90 return 'B'
//if the score is greater than or equal to 70 AND less than 80 return 'C'
//if the score is greater than or equal to 60 AND less than 70 return 'D'
//if the score is greater than or equal to 0 AND less than 60 return 'F'

//function that calculates the average of the three arguments passed
//initialize a variable which contains the sum of the three arguments
//divide it by 3
//then use Math.round()

function isNumber(value1, value2, value3) {
  if (Number.isInteger(value1) && 
      Number.isInteger(value2) && 
      Number.isInteger(value3)) {
    return true;
  } else {
    return false;
  }
}

function calculateAvg(arg1, arg2, arg3) {
  let average = Math.round((arg1 + arg2 + arg3) / 3);
  return average;
}

function gradeLetters(score) {
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score < 90) {
    return 'B';
  } else if (score >= 70 && score < 80) {
    return 'C';
  } else if (score >= 60 && score < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

function getGrade(grade1, grade2, grade3) {
  if (isNumber(grade1, grade2, grade3)) {
    let theAverage = calculateAvg(grade1, grade2, grade3);
    return gradeLetters(theAverage);
  } else {
    return 'One or more arguments is not a number';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"