function crunch(string) {
  let index = 0;
  let collapsed = '';
  
  while (index <= string.length - 1) {
    if (string[index] !== string[index + 1]) {
      collapsed += string[index];
    }
    
     index += 1;
  }
  
  return collapsed;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));