const readlineSync = require("readline-sync");

function banner(string) {
  let bannerTopBot = '+-';
  let spacedLine = '| ';
  let messageLine = '| ' + string + ' |';

  while (bannerTopBot.length <= string.length + 2) {
    bannerTopBot += '-';
  }

  while (spacedLine.length <= string.length + 2) {
    spacedLine += ' ';
  }

  bannerTopBot += '+';
  spacedLine += '|';

  console.log(bannerTopBot);
  console.log(spacedLine);
  console.log(messageLine);
  console.log(spacedLine);
  console.log(bannerTopBot);
}

function prompt(message) {
  let number = readlineSync.question(message);
  number = parseFloat(number);
  return number;
}

function inputNumValidation(theInput) {
  while (theInput === Number.NaN) {
    console.log(`Not a Number`);
    theInput = readlineSync.question('Please try again: \n');
    theInput = parseFloat(theInput);
  }
  return theInput;
}

function calculateMonthlyInterestRate(apr) {
  let monthlyIntRate = ((apr / 100) / 12);
  return monthlyIntRate;
}

console.clear();

while (true) {

  banner(`---The Mortgage/Loan Caluclator---`);

  let loanAmount = prompt('Please enter loan amount: \n');
  inputNumValidation(loanAmount);

  let apr = prompt('Enter APR():\n\n%');
  inputNumValidation(apr);

  let loanDurationInYears = prompt(`Enter how long the loan lasts in Years.
  NOTE:extra months will be asked later.\nYears:`);
  inputNumValidation(loanDurationInYears);

  let loanDurationInMonths = prompt('Enter the how long the loan lasts in MONTHS\nMonths:\n\n\n');
  inputNumValidation(loanDurationInMonths);

  let monthlyInterestRate = calculateMonthlyInterestRate(apr);
  let fullLoanDuration = (loanDurationInYears * 12) + loanDurationInMonths;
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 +
  monthlyInterestRate), (-fullLoanDuration))));

  console.log(`The monthly payment will be $${monthlyPayment.toFixed(2)}.\n`);
  console.log(`----Calculation ends here----\n\n`);

  let exitOrNot = readlineSync.question(`Would you like to exit the program?
  Type 'yes' to exit. Any other input followed by enter to calculate again.\n`);
  if (exitOrNot.toLowerCase() === 'yes') break;
}