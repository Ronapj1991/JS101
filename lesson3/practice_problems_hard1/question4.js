function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}
//function to fix below
// the purpose of this function is to check if a string is separated by 4 dots
// isAnIpNumber converts each string into number and checks if it is a valid IP number
//My Solution
/*
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length === 4) {
    let eachIteration;
    
    dotSeparatedWords.forEach(character => {
      eachIteration = character;
    });
    
    return isAnIpNumber(eachIteration);
  
  } else {
    return false;
  }
} */

//Launcschool solution only makes a few changes:

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  //first checking for the length of the array
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress("1.1.1.1"));//true
console.log(isDotSeparatedIpAddress("1.1.300.300"));//false
console.log(isDotSeparatedIpAddress("1.2.3.4.5.6"));//false