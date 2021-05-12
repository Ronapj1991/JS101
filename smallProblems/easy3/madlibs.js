//What is madlib? -- create a story template with fill in the blanks for words
// user constructs a list of words and place them into a story

//input: noun, verb, adverb, adjective
//output: story injected with the input

//can I assume that the input will always be a string?
//since the output expected are strings, I won't have to worry about mutating and object or returning a new one

//Test Cases

// inputs are the following
// noun: dog
// verb: walk
// adverb: quickly
// adjective: blue

// output 
// Do you verb your adjective noun adverb? That's hilarious!
// The adjective noun verb+s adverb over the lazy dog.
//The noun adverb verb+s up adjective Joe's turtle.

// Patterns:
// the inputs are just slapped onto an sentence
// all the outputs return a one line sentence, first output is 2 sentences on one line


// implementation
// initialize an object containing
// noun
// verb
// adverb
// adjective
// as keys with a value of empty strings

//use readline-sync for user input
// make sure that the inputs are strings, readline sync converts input to strings anyway
// assign those values to the object

//console.log the output using `` and bracket notation from the object

const readlineSync = require("readline-sync");

let madlibsWords = {
  noun: '',
  verb: '',
  adverb: '',
  adjective: ''
};

madlibsWords['noun'] = readlineSync.question('Enter a NOUN:\n');
madlibsWords['verb'] = readlineSync.question('Enter a VERB:\n');
madlibsWords['adverb'] = readlineSync.question('Enter an ADVERB:\n');
madlibsWords['adjective'] = readlineSync.question('Enter an adjective:\n');

console.log(`Do you ${madlibsWords['verb']} your ${madlibsWords['adjective']} ${madlibsWords['noun']} ${madlibsWords['adverb']}? That's hilarious!`);
console.log(`The ${madlibsWords['adjective']} ${madlibsWords['noun']} ${madlibsWords['verb']}s ${madlibsWords['adverb']} over the lazy dog`);
console.log(`The ${madlibsWords['noun']} ${madlibsWords['adverb']} ${madlibsWords['verb']}s up ${madlibsWords['adjective']} Joe's turtle.`);