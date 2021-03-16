let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1)

//primitive values are immutable
//line 2 assigns str2 a copy of str1's value
//line 3 assigns a completely different string to str2 without changeing str1's value