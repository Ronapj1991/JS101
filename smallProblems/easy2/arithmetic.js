const readlineSync = require('readline-sync');

let firstNum = readlineSync.question('Enter the first number:\n');
firstNum = parseInt(firstNum);
let secondNum = readlineSync.question('Enter the second number:\n');
secondNum = parseInt(secondNum);

function operation(arg1, arg2) {
  console.log(`${arg1} + ${arg2} = ${arg1 + arg2}`);
  console.log(`${arg1} - ${arg2} = ${arg1 - arg2}`);
  console.log(`${arg1} * ${arg2} = ${arg1 * arg2}`);
  console.log(`${arg1} / ${arg2} = ${Math.round(arg1 / arg2)}`);
  console.log(`${arg1} % ${arg2} = ${Math.round(arg1 % arg2)}`);
  console.log(`${arg1} ** ${arg2} = ${Math.pow(arg1, arg2)}`);
}

operation(firstNum, secondNum);