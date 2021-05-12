console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

function multisum(number) {
  let multiples = [];
  
  for (let incrementing = 0; incrementing < number; incrementing += 1) {
    if (incrementing % 3 === 0 || incrementing % 5 === 0) {
      multiples.push(incrementing);
    }
  }
  
  return multiples.reduce((accumulator, element) => {
    return accumulator += element;
  }, 0);
}

