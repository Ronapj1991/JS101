let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

//split the string
//use array.prototype.filter to find the desired character
//.filter() will return the characters in an array
//use the .length to determine the number

statement1.split('').filter(element => 't').length;
statement2.split('').filter(element => 't').length;