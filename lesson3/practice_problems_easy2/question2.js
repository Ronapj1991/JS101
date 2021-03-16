let numbers = [1, 2, 3, 4, 5];
//numbers.reverse();
//console.log(numbers); // [ 5, 4, 3, 2, 1 ]

//numbers = [1, 2, 3, 4, 5];
//numbers.sort((num1, num2) => num2 - num1);
//console.log(numbers); // [ 5, 4, 3, 2, 1 ];

/*function reverseArray(array) {
  let newArray = [];
  for (let i = array.length -1; i >= 0; i -= 1) {
    newArray.push(array[i]);
  }
  
  return newArray;
}

console.log(reverseArray(numbers));
console.log(numbers);*/

/*function reverseArray(array) {
  let newArray = [];
  array.forEach(value => {
    newArray.unshift(value);
  });
  
  return newArray;
}

console.log(reverseArray(numbers));
console.log(numbers);*/

let reversedArray = numbers.slice().reverse();
let sortedArray = [...numbers].sort((a, b) => b - a);

console.log(reversedArray);
console.log(sortedArray);
console.log(numbers);