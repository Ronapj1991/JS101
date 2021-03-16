function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
/* I wrote a function using a for loop not sure if this is acceptable
function determineFactors(number) {
  let factors = [];
  
  for (let divisor = number; divisor > 0; divisor -= 1) {
    let targetNumber = number / divisor;
    if (number % divisor == 0) factors.push(targetNumber);
  }
  
  return factors;
}
*/
function launchschoolSolution(number) {
  let divisor = number;
  let factors = [];
  
  while(divisor > 0) {
    if (number % divisor === 0) { //determine if number / divisor is an integer
      factors.push(number / divisor);
    }
    
    divisor -= 1;
  }
  
  return factors;
}

console.log(launchschoolSolution(0));