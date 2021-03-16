let munstersDescription = "the Munsters are CREEPY and Spooky.";
//=> The munsters are creepy and spooky.

function capitalizeFirstLetterOnly(sentence) {
  let allLowerCase = sentence.toLowerCase();
  let firstLetter = allLowerCase[0].toUpperCase();
  let finalSentence = firstLetter + allLowerCase.slice(1);
  return finalSentence;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(capitalizeFirstLetterOnly(munstersDescription));