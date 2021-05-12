let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesInArray = Object.values(ages);
let leastAge = Math.min(...agesInArray);

console.log(leastAge);