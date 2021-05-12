let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
//MY SOLUTION
// let targetNum = 0;

// Object.values(ages).forEach(value => targetNum += value);

// console.log(targetNum);

//Launchschool solution: I could use reduce as well

let finalValue = Object.values(ages).reduce((element, accumulator) => {
  return element + accumulator;
}, 0);

console.log(finalValue);