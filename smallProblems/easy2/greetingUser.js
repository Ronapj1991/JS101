const readlineSync = require('readline-sync');

let userName = readlineSync.question('What is your name?\n');

if (userName[userName.length - 1] ===  '!') {
  console.log(`HELLO ${userName.toUpperCase()}! WHY SCREAM?`);
} else {
  console.log(`Hello ${userName}!`);
}