/*
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function hasExclamation(string) {
  console.log(string[string.length - 1] === '!');
}

hasExclamation(str1);
hasExclamation(str2);

it's easier to use .endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
*/
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

str1.endsWith('!');
str2.endsWith('!');

//the value returned is true or false
//value are not printed to console