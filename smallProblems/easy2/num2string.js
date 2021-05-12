const CHARACTERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let targetStr = '';
  
  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    
    targetStr = CHARACTERS[remainder] + targetStr;
  } while (number > 0);
  
  console.log(targetStr);
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"


// main logic:
// use % to get the right most digit
//use the right most digit to match required character from the constant
//divide the given number by 10 then floor it to get to the next digit