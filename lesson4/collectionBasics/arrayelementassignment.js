let numbers = [1, 2, 3, 4];

/*
for (let idx = 0; idx <= numbers.length; idx += 1) { //if I try to go over the length it seems like infinite loop
  numbers[idx] += 1;
}

console.log(numbers);
*/
//Launchschool solution;
numbers[1] = numbers[1] + 1;
numbers[2] = numbers[2] + 1;
numbers[3] = numbers[3] + 1;
numbers[4] = numbers[4] + 1;
numbers;    // [ 2, 3, 4, 5, NaN ]