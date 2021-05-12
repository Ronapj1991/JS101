//for loop transformation
// let numbers = [1, 2, 3, 4, 5];
// let transformedNumbers = [];

// for (let index = 0;index < numbers.length; index += 1) {
//   let currentNum = numbers[index];
//   let squaredNum = currentNum * currentNum;
  
//   transformedNumbers.push(squaredNum);
// }
// console.log(transformedNumbers);

//same with code above using map

//Example1
// [[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
//Action: forEach -- performed on [[1, 2], [3, 4]] -- no side effect -- return value: undefined -- not used
//Action: outer callback execution -- performed on each sub array -- no side effect -- return value undefined -- not used
//Action: console.log -- performed on: element 0 of each sub array -- logs string version of the number -- return value: undefined -- used by forEach
//Action: element reference -- performed on 0 element -- no side effect -- return value: element for 0 index -- used by console.log

//Example2
//[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
//Action: method call map -- performed on an outer array --  no side effect -- Returns: New array[undefined, undefined] -- return value is not used
//Action: callback exectution -- performed on each sub array -- no side effect -- Returns undefined -- Return value is used by map for transformation
//Action: Element access ([0]) -- performed on each sub array -- no side effect -- returns element at index 0 of sub-array -- return value is used by console.log
//Action: method call (console.log) -- element at index 0 of each subarray -- side effect: outputs a string represenation of an integer -- return value is undefined -- return value is used by the callback

//Example3
// [[1, 2], [3, 4]].map(arr => {
//   console.log(arr[0]);
//   return arr[0];
// });
//Action: method call map -- performed on outer array -- no side effect -- return value: 1, 3 -- return value is passed to newArray so [1, 3]
//Action: callback execution -- performed on each sub-array -- there might be a side effect -- returns 1 then returns 3 -- return value is used by map
//Action: console.log -- performed on element at index 0 -- side effect: number is then transformed into a string -- return value is undefined -- return value is usde by the callback
//Action: return arr[0] -- performed on element index 0 -- no side effect -- return is the 0 element of each array -- return value is used by map


//Example4
// let myArr = [[18, 7], [3, 12]].forEach(arr => {
//   console.log(arr);
//   return arr.map(num => {
//     if (num > 5) {
//       return console.log(num);
//     }
//   })
// });

// console.log(myArr);
//Action: variable declaration -- performed on: myArr 
//Action: method call forEach -- performed on [[18, 7], [3, 12]] -- no side effect --
//Action: callback execution (arr) -- performed on each subarray
//Action: return -- performed on each subarray -- 
//Action: method call map -- performed on each subarray
//Action: callback execution within map -- performed on each element of each subarray
//Action: if statement -- performed on each element
//Action: return the value of console.log(num) -- only on true values

//Example5
// [[1, 2], [3, 4]].map(arr => {
//   return arr.map(num => num * 2);
// });
//Action: method call map -- performed on [[1, 2], [3, 4]] -- no side effect -- return value: new transformed array -- return value not used
//Action: outer callback execution -- performed on each sub array -- no side effect -- return value: new transformed subarray -- return value is used by top level map
//Action: method call map -- performed on each sub array --no side effect -- return value: new transformed subarray -- used by the outer callback
//Action: inner call back execution -- performed on each element per sub array -- return value: numbers -- used by inner map for transformation
//Action: num * 2 -- performed on each value of num -- no side effect -- retun value: number -- return value is used by callback


//Example6
// [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
//   return Object.keys(object).every(key => object[key][0] === key);
// });
//Action:method call filter -- performed on the array of objects -- side effect:none -- return value: newArray -- not used
//Action:callback -- performed on each object in array -- side effect: none -- return value: selected values -- used by filter
//Action:Object.keys -- performed on each object -- side effect:none -- return value: an array of keys from objects -- used by callback on objects
//Action:.every -- performed on each value in the array -- side effect none -- return value: boolean -- used by the outer callback if true
//Action: callback on each element -- performed on each element -- side effect none -- return value: boolean -- passed to every
//Action object[key][0 === key: performed on each iteration of key and object] -- side effect none -- return value: boolean -- used to determine if the current object will be added onto the newArray by filter


// Example7
// [[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
//   return arr.filter(item => {
//     if (typeof item === 'number') {    // if it's a number
//       return item > 13;
//     } else {
//       return item.length < 6;
//     }
//   });
// });
// => [ [ 27 ], [ 'apple' ] ]

//Action: method call map -- performed on [[8, 13, 27], ['apple', 'banana', 'cantaloupe']] -- side effect: none -- return value: newArray - selection -- return value not used
//Action: outer callback -- performed on each sub array -- side effect: none -- return value: coming from filter -- return value is used by map
//Action: arr.filter -- performed on each sub array -- side effect: none -- return value: coming from the inner callback -- return value is used by outer callback
//Action: inner callback -- performed on each element on each subarray -- side effect none -- return value is selected values -- return is used by filter
//Action: if statement -- performed on each element of the array -- side effect: none -- return value: number/string -- return value will be used by filter
//if the typeof the current element is number, a boolean value will be returned by comparing the current element to 13
//if the typeof the current element is not a number, it's length will be compared to 6

//Example8
// [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
//   return element1.forEach(element2 => {
//     return element2.filter(element3 => {
//       return element3.length > 0;
//     });
//   });
//});
// => [ undefined, undefined ]

//Action: method call map -- performed on [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]] -- side effect none -- return value is newArray -- not used
//Action: 1st callback -- performed on [[1], [2], [3], [4]] and [['a'], ['b'], ['c']] -- side effect none -- return value: selection -- used by map
//Action:method call forEach-- performed on each subarray -- side effect none -- return value -- undefined -- forRach ignores return value od callback
//Action:2nd callback  -- performed on each element of the subarray --side effect none --return value: each array-element -- used by forEach
//Action: filer -- performed on: each array element -- side effect none -- return value -- selected values -- used by 2nd callback
//Action: 3rd callback --performed on: innermost elements -- side effect none -- return value boolean -- used by filter

//Example9
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});

//action: map -- performed on [[[1, 2], [3, 4]], [5, 6]] -- side effect none --  return value:transformed array -- not used
//action: callback1 for map --  perfromed on [[1, 2], [3, 4]] and [5, 6] -- side effect none -- return value: transformed array -- used by map
//action: map -- performed on [[1, 2], [3, 4]] and [5, 6]  -- side effect none -- return value -- newArray -- used by outer callback1
//action: innter callback -- performed on [1,2] and [3, 4] and 5 and 6 -- return value -- number or array -- return value used by 2nd map
//action: if statement -- performed on [1,2] and [3, 4] and 5 and 6 -- return value: number/ array values incremented by one into a new array --used by inner callback

//[[[2, 3], [4, 5]], [6,7]]

//don't mutate the collection you are iterating through


let arr = [1, 2];

arr.map(subArr => arr.pop()); // => [ 2, <1 empty item> ]

//mutating the array while performing map jeopardizes the operation
