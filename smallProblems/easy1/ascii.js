asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

function asciiValue(string) {
  let array = string.split('');
  let addedValue = 0;
  
  array.forEach(character => {
    addedValue += character.charCodeAt();
  });
  
  console.log(addedValue);
}