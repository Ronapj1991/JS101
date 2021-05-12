const readlineSync = require('readline-sync');

function askUserForNumber(prompt) {
  let userInput = readlineSync.question(prompt);
  userInput = Number(userInput);
  return userInput;
}

function sum(userInput) {
  let targetNumber = 0;
  for (let num = 1; num <= userInput; num += 1) {
    targetNumber += num;
  }
  
  return targetNumber;
}

function product(userInput) {
  let targetNumber = 1;
  for (let num = 1; num <= userInput; num += 1) {
    targetNumber *= num;
  }
  
  return targetNumber;
}

function askOperation(prompt) {
  let operation = readlineSync.question(prompt);
  operation = operation.toLowerCase();
  if (operation === 's') {
    return 'sum';
  } else if (operation === 'p') {
    return 'product';
  }
}

let userNumber = askUserForNumber('Please enter an integer greater than 0:\n');
let userOperation = askOperation('Enter "s" to compute the sum, or "p" to compute the product.');
  
if (userOperation === 'product') {
  console.log(`The product of the integers between 1 and ${userNumber} is ${product(userNumber)}.`);
} else if (userOperation === 'sum') {
  console.log(`The sum of the integers between 1 and ${userNumber} is ${sum(userNumber)}.`);
}
