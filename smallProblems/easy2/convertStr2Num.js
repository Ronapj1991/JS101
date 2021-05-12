function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  
  let arrayOfDigits = string.split('').map(character => DIGITS[character]);
  let targetNum = 0;
  arrayOfDigits.forEach(digit => targetNum = (targetNum * 10) + digit);
  return targetNum;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

//Logic:
//create an object with keys from 0 - 9 with each value from 0 -9 as well
//intialize a variable, split the string and assign it to this variable
//returned array's characters must be mapped to the created object
//this will return an array of numbers
//initialize a target number to 0
//expansion: target number times 10 + each digit