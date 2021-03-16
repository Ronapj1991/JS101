let numbers = [1, 2, 3, 4];
/*
while (numbers.length > 0) {
  numbers.pop();
}
*/
/*
for (let i = numbers.length; i >= numbers.length; i -= 1) {
  numbers.pop();
}
*/
/*
do {
  numbers.shift();
} while (numbers.length > 0);
*/

//THESE ARE THE BEST SOLUTIONS

// numbers.length = 0;
//numbers.splice(0, numbers.length);
/*
while (numbers.length) {
  numbers.pop();
}
*/
console.log(numbers);