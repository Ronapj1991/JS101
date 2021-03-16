/*
function isColorValid(color) {
  return (color === "blue" || color === "green");
}*/

//const isColorValid = color => color === 'blue' || color === 'green';

const isColorValid = color => ['blue', 'green'].includes(color);

console.log(isColorValid('blue'));
console.log(isColorValid('green'));
console.log(isColorValid('yellow'));