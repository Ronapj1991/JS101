const readlineSync = require('readline-sync');

function askForMoney(prompt) {
  let dollars = readlineSync.question(prompt);
  dollars = Number(dollars);
  return dollars;
}

let billAmount = askForMoney('What is the bill? ');
let tipRate = askForMoney('What is the tip percentage? ');
let tip = (tipRate / 100) * billAmount;
let total = tip + billAmount;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);