let title = "Flintstone Family Members";

//determine how many spaces you need
//in this example 40 character wide is the measure
//subtract string-to-be-centered's length from character width
//divide it by 2
//floor it
//add the final number to the length of the string to be centered using padStart

let whitespace = Math.floor((40 - title.length) / 2);
console.log(title.padStart(whitespace + title.length));