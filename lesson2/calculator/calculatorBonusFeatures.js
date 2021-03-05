const readlineSync = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

console.clear();

while (true) {
  prompt('welcome');
  
  prompt('firstNumber');
  let number1 = readlineSync.question();
  
  while (invalidNumber(number1)) {
  prompt('invalidNumValue');
  number1 = readlineSync.question();
  }
  
  prompt('secondNumber');
  let number2 = readlineSync.question();
  
  while (invalidNumber(number2)) {
  prompt('invalidNumValue');
  number2 = readlineSync.question();
  }
  
  prompt('operation');
  let operation = readlineSync.question();
  
  while (!['1', '2', '3', '4'].includes(operation)) { // will cause an infinite loop
  prompt('invalidOperation');
  operation = readlineSync.question;
  }
  
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`${MESSAGES[LANGUAGE]['result']}${output}`);
  
  prompt('exitOrNot');
  let exitOrNot = readlineSync.question();
  if (exitOrNot.toLowerCase() === 'yes' || exitOrNot.toLowerCase() === 'si') break;
}