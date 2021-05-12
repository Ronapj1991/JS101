//Double number - even in length
//              - left side digits are the same as the right side digits
//Write a function
//Argument gets multiplied by 2
//if argument is double number return the argument

// twice(37);          // 74 not a double number
// twice(44);          // 44 double number
// twice(334433);      // 668866 not a double number
// twice(444);         // 888 not a double number
// twice(107);         // 214 not a double number
// twice(103103);      // 103103 double number
// twice(3333);        // 3333 double number
// twice(7676);        // 7676 double number


//write a function that checks if the argument is a double number
//check the length of the number by splitting into an array
//if array length is even

//how would I check for a pattern:
// if the number given is 103103
// i could compare [1, 0, 3, 1, 0, 3]
//array[0] with array[3]
//array[1] with array[4]
//array[2] with array[5]
//array length is 6

//for 7676: [7, 6, 7, 6]
//array length is 4
//array[0] with array[2]
//array[1] with array[3]

// so i'll have to use array.length divided by 2 for comparison
// I would need 2 indexes
//initialize an empty array
// 1st index need to start with 0
// 2nd index need to start with array.length divided by 2
// if array[1st index] is equal to array[2nd index]
// push the value of array[1st index into the empty array]
// increment 1st index and 2nd index
// repeat this until array[1st index] is equal to array[2nd index]
// so the loop will terminate at some point when 2nd index hits undefined
// the new array will be converted into a string when join('') is used
// after joining the array concat the new value to itself
// use Number() to convert the most recent value into a number

//write another function containing the double number checker function
//if the argument is not a double number
//multiply it by 2

function isEven(number) {
  let array = number.toString().split('');
  
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function doubleNumber(number) {
  let comparisonArray = number.toString().split('');
  let newArray = [];
  let firstIdx = 0;
  let secondIdx = comparisonArray.length / 2;
  
  while (comparisonArray[firstIdx] === comparisonArray[secondIdx]) {
    newArray.push(comparisonArray[firstIdx]);
    firstIdx += 1;
    secondIdx += 1;
  }
  
  newArray = newArray.join('');
  return Number(newArray.concat(newArray));
}

function twice(number) {
  if (isEven(number) && doubleNumber(number) === number) {
    console.log(number);
  } else {
    console.log(number * 2);
  }
}

twice(37);          // 74 not a double number
twice(44);          // 44 double number
twice(334433);      // 668866 not a double number
twice(444);         // 888 not a double number
twice(107);         // 214 not a double number
twice(103103);      // 103103 double number
twice(3333);        // 3333 double number
twice(7676);        // 7676 double number