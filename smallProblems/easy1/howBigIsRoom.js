const readlineSync = require('readline-sync');

function askForMeasurement(prompt) {
  let measure = readlineSync.question(prompt);
  measure = Number(measure);
  return measure;
}

let length = askForMeasurement('What is the length of the room in meters? ');
let width = askForMeasurement('What is the width of the room in Meters? ');
let sqMeters = length * width;
let sqFeet = sqMeters * 10.7639;


console.log(`The area of the room is ${sqMeters} square meters (${sqFeet.toFixed(2)} square feet)`);