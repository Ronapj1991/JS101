//for small numbers:
function fibonacci(number) {
  let a = 1;
  let b = 0;
  let term;
  
  while (number > 0) {
    term = a + b;
    b = a;
    a = term;
    number -= 1;
  }
  
  return term;
}

//Launschschool solution:
function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;
  
  do {
    fibonacci = first + second;
    first = second;
    second = fibonacci;
    count += 1n;
  } while (String(fibonacci).length < length);
  
  return count;
}

console.log(fibonacci(4));
console.log(findFibonacciIndexByLength(2n) ===7n);    // 1 1 2 3 5 8 13
//findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
//findFibonacciIndexByLength(10n) === 45n;
//findFibonacciIndexByLength(16n) === 74n;
//findFibonacciIndexByLength(100n) === 476n;
//findFibonacciIndexByLength(1000n) === 4782n;
//findFibonacciIndexByLength(10000n) === 47847n;