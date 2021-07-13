//Uncomment problems that are currently being worked on

//Practice Problem 1
//order the following array of number strings by descending numeric value (largest number value to smallest)
// let arr = ['10', '11', '9', '7', '8'];
// console.log(arr.sort((a, b) => {
//   return Number(b) - Number(a);
// }));

//Practice Problem 2
//How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// console.log(books.sort((a, b) => {
//   return Number(a.published) - Number(b.published);
// }));


//Practice Problem 3
//For each of these collection objects, demonstrate how you would access the letter g
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3]);

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1].third[0]);

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2].third[0][0]);

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1.b[1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
// console.log(Object.keys(obj2.third)[0]);


//Practice Problem 4
//For each of these collection objects, demonstrate how you would change the value 3 to 4.
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;

// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4;

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4;



// Practice Problem 5
// Consider the following nested object:
//Compute and display the total age of the male members of the family.
// let totalAge = 0;

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// for (let key in munsters) {
//   if (munsters[key]['gender'] === 'male'){
//     totalAge += munsters[key]['age'];
//   }
// }
// console.log(totalAge);


//Practice Problem 6
//One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.
//Given this previously seen family object, print the name, age, and gender of each family member:
// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// Object.entries(munsters).forEach(nestedArray => {
//     console.log(`${nestedArray[0]} is a ${nestedArray[1].age}-year-old ${nestedArray[1].gender}.`);
//   }
// );


//Practice Problem 7
//Given the following code, what will the final values of a and b be? Try to answer without running the code.
// let a = 2; //assigned a primitive value
// let b = [5, 8]; // assigned an object
// let arr = [a, b]; // assigned an object a points to 2 b points [5, 8]

// arr[0] += 2; //arr[0] === a, a becomes 4
// arr[1][0] -= a; //arr[1] === b, b[0] === 5, 5 -= a

// console.log(a)
// console.log(b)


//Practice Problem 8
//Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).map(nestedArray => {
//   nestedArray.map(eachWord => {
//     eachWord.split('').filter(eachCharacter => {
//       if (['a', 'e', 'i', 'o', 'u'].includes(eachCharacter)) {
//         console.log(eachCharacter);
//       }
//     });
//   });
// });


//Practice Problem 9
// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
// let arr2 = arr.map(nestedArray => {
//   if (typeof nestedArray[0] === 'string') {
//     return nestedArray.slice().sort();
//   } else {
//     return nestedArray.slice().sort((a, b) => a - b);
//   }
// })
// console.log(arr)
// console.log(arr2)


//Practice Problem 10 - desc
// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// console.log(arr.map(nestedArray => {
//   return nestedArray.slice().sort((a, b) => b - a);
// }))

// console.log(arr);



//Practice Problem 11
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// let arr2 = arr.map(eachObject => {
//   let updatedObj = {};
  
//   for (let key in eachObject) {
//     updatedObj[key] = eachObject[key] + 1;
//   }
  
//   return updatedObj;
// });

// console.log(arr);
// console.log(arr2);



//Practice Problem 12
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// let arr2 = arr.map(eachSubArr => {
//   return eachSubArr.filter(eachElement => eachElement % 3 === 0);
// })

// console.log(arr2);


//Practice Problem 13
//Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.
//let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// arr.sort((a,b) => {
//   let oddSumForA = a.filter(element => element % 2 !== 0)
//                     .reduce((accumulator, element) => accumulator + element);
//   let oddSumForB = b.filter(element => element % 2 !== 0)
//                     .reduce((accumulator, element) => accumulator + element);
  
//   return oddSumForA - oddSumForB;
// })

// console.log(arr);


//Practice Problem 14
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// Object.values(obj).map(attribute => {
//   if (attribute['type'] === 'fruit') {
//     return attribute['colors'].map(word => word[0].toUpperCase + word.slice(1));
//   } else {
//     return attribute['size'].toUpperCase();
//   }
// });


// //Practice Problem 15
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let arr2 = arr.map(eachObj => {
//   Object.values(eachObj).filter(eachArrayConvObj => eachArrayConvObj.every(element => element % 2 === 0));
//   return eachObj;
// });

// console.log(arr2);


//Practice Problem 16
// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
//let obj = {};
// arr.map(eachSubArr => {
//   let key = eachSubArr[0];
//   let value = eachSubArr[1];
  
//   obj[key] = value;
// });


//Practice Problem 17
//write a function that takes no arguments and returns a string that contains a UUID
//8-4-4-4-12
//0 - 9 and a - f
function randomValueFromArray(someArr) {
  return Math.floor(Math.random() * (someArr.length));
}

function uuid() {
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'a', 'b', 'c', 'd', 'e', 'f'];
  
  let section1 = '';
  let section2 = '';
  let section3 = '';
  let section4 = '';
  let section5 = '';
  
  let section1Counter = 8;
  let section2Counter = 4;
  let section3Counter = 4;
  let section4Counter = 4;
  let section5Counter = 12;
  
  while (section1Counter > 0) {
    section1 += arr[randomValueFromArray(arr)];
    section1Counter -= 1;
  }
  
  while (section2Counter > 0) {
    section2 += arr[randomValueFromArray(arr)];
    section2Counter -= 1;
  }
  
  while (section3Counter > 0) {
    section3 += arr[randomValueFromArray(arr)];
    section3Counter -= 1;
  }
  
  while (section4Counter > 0) {
    section4 += arr[randomValueFromArray(arr)];
    section4Counter -= 1;
  }
  
  while (section5Counter > 0) {
    section5 += arr[randomValueFromArray(arr)];
    section5Counter -= 1;
  }
  
  return section1 + '-' + section2 + '-' + section3 + '-' + section4 + '-' + section5;
}

console.log(uuid());