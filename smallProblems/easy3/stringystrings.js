//My Solution 1
/*
function stringy(number) {
  number = parseInt(number);
  let targetArray = [];
  
  while (number > 0) {
    targetArray.push('1');
    number -= 1;
    
    if (number > 0) {
      targetArray.push('0');
      number -= 1;
    } else {
      return targetArray.join('');
    }
  }
  
  return targetArray.join('');
}
*/
//My Solution 2
/*
function stringy(number) {
  let numberArray = [];
  let stringArray = [];
  
  while (number > 0) {
    numberArray.push(number);
    number -= 1;
  }
  
  for (let idx = 0; idx < numberArray.length; idx+= 1) {
    if (idx % 2 === 0) {
      stringArray.push('1');
    } else {
      stringArray.push('0');
    }
  }
  
  return stringArray.join('');
}
*/

//Launchschool Solution:
function stringy(size) {//clearly states the intention for the argument
  let result = ""; 
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;//making use of implicit coercion
  }
  return result;
};


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"