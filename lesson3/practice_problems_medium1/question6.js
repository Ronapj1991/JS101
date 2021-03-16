let nanArray = [NaN];

console.log(nanArray[0] === NaN);

//logs false - JavaScript doesn't let you use == or === to determine whether a number is NaN
//us Number.isNaN(value) - more robust than isNaN()