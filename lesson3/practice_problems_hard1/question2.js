let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

//ANSWER: line 6 log [1, 2] as well because object and numArray point to the same area in memory

We can declare and initialize numArray with a reference to a copy of the original array:

let object = { first: [1] };
let numArray = object["first"].slice();
numArray.push(2);

We can use Array.prototype.concat(), which returns a new array instead of modifying the original array:

Copy Code
let object = { first: [1] };
let numArray = object["first"].concat();
numArray.push(2);