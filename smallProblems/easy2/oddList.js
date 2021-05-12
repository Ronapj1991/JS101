function oddities(array) {
  let array2 = [];
  
  for (let idxOfGivenArray = 0; idxOfGivenArray < array.length; 
      idxOfGivenArray += 2) {
  array2.push(array[idxOfGivenArray]);
  } 
  
  return array2;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []