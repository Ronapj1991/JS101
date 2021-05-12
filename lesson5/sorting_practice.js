//How would you sort the following array by the lengths of each word?
let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a,b) => {
  return a.length - b.length;
});

console.log(words);