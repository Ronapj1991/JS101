function logInBox(string) {
  let bannerTopBot = '+-';
  let spacedLine = '| ';
  let messageLine = '| ' + string + ' |';
  
  while (bannerTopBot.length <= string.length + 2) {
    bannerTopBot += '-';
  }
  
  while (spacedLine.length <= string.length + 2) {
    spacedLine += ' ';
  }
  
  bannerTopBot += '+';
  spacedLine += '|';
  
  console.log(bannerTopBot);
  console.log(spacedLine);
  console.log(messageLine);
  console.log(spacedLine);
  console.log(bannerTopBot);
}

logInBox('To boldly go where no one has gone before.');

/* Here's how I tried to discover the logic that I could use for the program:

Bannerizer

- function that take a short line of text
- print the line of text within a box

START

function name is logInBox - this function takes a string
SET variable line1 - this contains ‘+-‘
WHILE line1 <=  string.length + 1, add ‘-‘ to line1
add a + at the end of the line

END */