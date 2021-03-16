/* MY SOLUTION
let outputString = 'The Flintstones Rock!';
let incrementor = 0;

do {
  console.log(`${outputString.padStart(outputString.length + incrementor)}`);
  incrementor += 1;
} while (incrementor < 10);
*/

//LAUNCHSCHOOL SOLUTION (showcasing .repeat())
for (let padding = 1; padding <= 10; padding += 1) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}