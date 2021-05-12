/*
function messWithVars(one, two) {
  //shadows global variables
  one = two;//local variable one is equal to ["two"]; global variable one is eq to ["one"]
  one.splice(0, 1, "five");//local variable one points to ["two"] which is the same value that global variable two points at
}

let one = ["one"];
let two = ["two"];//this gets changed to "five"

messWithVars(one, two);

console.log(`one is: ${one}`); //logs one
console.log(`two is: ${two}`); //logs five
*/
/*
function messWithVars(one, two) {
  //shadows global variables one and two
  one = ["two"]; // local variable one points to object ["two"]; global variable one stays ["one"]
  one.splice(0, 1, "five"); //local variable one is mutated to have the value "five"
}

let one = ["one"];
let two = ["two"];

messWithVars(one, two);

console.log(`one is: ${one}`); //logs one
console.log(`two is: ${two}`); //logs two
*/
