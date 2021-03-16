let munstersDescription = "The Munsters are creepy and spooky.";
/* MY INEFFICIENT SOLUTION
let stringToArray = munstersDescription.split(' ');
let targetArray = [];

for (let iterator = 0; iterator < stringToArray.length; iterator += 1) {
  let eachWord = stringToArray[iterator];
  if (eachWord[0] === 'T' || eachWord[0] === 'M') {
    let convertedWord = eachWord[0].toLowerCase() + eachWord.slice(1).toUpperCase();
    targetArray.push(convertedWord);
  } else {
    let fullUpperCaseWord = eachWord.toUpperCase();
    targetArray.push(fullUpperCaseWord);
  }
}

let convertedStringFromTargetArray = targetArray.join(' ');
console.log(convertedStringFromTargetArray);
*/

//LAUNCHSCHOOL's Solution
//What I missed: to check for the current case of a character I could:
//character === character.toUpperCase() or character === character.toLowerCase()
//primitive value in action
//another thing to note is the difference of split(' ') and ('');
//split(' ') split the string into words.
//split('') split the string into each character even the whitespace

let newString = munstersDescription.split('').map(eachCharacter => {
  if (eachCharacter === eachCharacter.toUpperCase()) {
    return eachCharacter.toLowerCase();
  } else {
    return eachCharacter.toUpperCase();
  }
}).join('');

console.log(newString);