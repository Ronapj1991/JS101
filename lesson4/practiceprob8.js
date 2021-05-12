let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
//create an object
//names are keys
//positions in the array are values

//initialize an empty object
//in order to get the names, I can iterate over the array
//in order to get the positions, i can use the index variable when iterating over the array
//in each iteration assign fintstones[index] = index to the empty object

//MY SOLUTION:
// let emptyObject = {};

// for (let idx = 0; idx < flintstones.length; idx += 1) {
//   emptyObject[flintstones[idx]] = idx;
// }

// console.log(emptyObject);

//LaunchSchool solution

let emptyObject = {};

flintstones.forEach((name, index) => { //array destructuring, remember that 2nd argument of forEach is for index and '()' has to be used'
  emptyObject[name] = index;
});

emptyObject;