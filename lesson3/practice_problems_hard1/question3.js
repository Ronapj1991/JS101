/*
function messWithVars(one, two, three) {
  one = two; //local variable one is equal to what ever is passed into local variable two; global variable one stays ["one"]
  two = three; // local variable two is equal to ["three"]; global variable two is stays ["two"];this doesn't change where local variable one is pointing to
  three = one; //local variable three gets assigned the value of where local variable one is pointing to which is ["two"]
  console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`); */
/*
function messWithVars(one, two, three) {
  //shadowed global variables
  one = ["two"];//will log two
  two = ["three"];//will log three
  three = ["one"];//will log one
  
  console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);
//the code below will log the global variables
console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);*/

function messWithVars(one, two, three) {
  //shadows the global variables
  one.splice(0, 1, "two");//local variable one will be "two";global variable one's value will be mutated to "two"
  two.splice(0, 1, "three");// same with above
  three.splice(0, 1, "one");// same with above
  
console.log(`one is: ${one}`);//logs two
console.log(`two is: ${two}`);// logs three
console.log(`three is: ${three}`);//logs one
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);