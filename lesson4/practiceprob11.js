let statement = "The Flintstones Rock";

//create an object
//the object should contain how many times a character can be found in the given string

//example output: { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

//1st challenge is to create the object and assign the UNIQUE characters to it
//first I can split the given string
//sort the array which will make the same characters positioned right next to each other
//Iterate over the array
//IF the current character is not equal to the next then assign it to a target object as a key

// let object = {};
// let array1 = statement.split('').sort();

// for (let idx = 0; idx < array1.length; idx += 1) {
//   if (array1[idx] !== array1[idx + 1] && array1[idx] !== ' ') {
//     object[array1[idx]] = 0;
//   }
// }

// for (let idx2 = 0; idx2 < array1.length; idx2 += 1) {
//   Object.keys(object).forEach(character => {
//     if (character === array1[idx2]) {
//       object[character] += 1;
//     }
//   });
// }

// console.log(object);

// let result = {};

// for (let counter = 0; counter < statement.length; counter += 1) {
//   let char = statement[counter];
//   if (char === ' ') continue;
  
//   result[char] = result[char] || 0;
//   result[char] += 1;
// }

