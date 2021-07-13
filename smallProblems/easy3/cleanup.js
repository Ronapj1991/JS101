//write a function that 
//returns a string with all non alphabetical characters replaced by spaces
//if one or more non-alphabetic characters occur in a row should only have one space in the result

//explicit requirements: 
//return a string
//return value should have non alphabetical characters replaced by spaces
//the result string should never have consecutive spaces

//argument is a string but with non-alphabetical characters

//how do I differentiate the alphabetical strings vs non alphabetical strings?
//ANSWER: use regex pattern /[A-Za-z]/
console.log('string'.test(/[A-Za-z]/));

//how do I prevent consecutive spaces?


function cleanUp(assortedString) {
  
}

// cleanUp("---what's my +*& line?");    // " what s my line "