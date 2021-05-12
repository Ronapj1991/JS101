const CHARACTERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';
  
  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    
    result = CHARACTERS[remainder] + result;
  } while (number > 0);
  
  return result;
}


function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return '-' + integerToString(Math.abs(number));
    case 0:
      return '0';
    default:
      return '+' + integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");