// let arr = [['a', ['b']], { b: 'bear', c: 'cat' }, 'cab'];

// arr[0];// => [ 'a', [ 'b' ] ]
// arr[0][1][0];// => 'b'
// arr[1];// => { b: 'bear', c: 'cat' }
// arr[1]['b'];// => 'bear'
// arr[1]['b'][1];// => 'e'
// arr[2][1];// => 'a'

// let a = [1, 3];
// let b = [2];
// let arr = [a, b];
// arr //is eqal to [a,b] or [[1,3], [2];]

//Variables as Pointers
// let a = [1, 3];
// let b = [2];
// let arr = [a, b];

// arr; // => [ [ 1, 3 ], [ 2 ] ]

// a[1] = 5;
// arr; // => [ [ 1, 5 ], [ 2 ] ]


//Shallow copy using slice()
// let arr = ['a', 'b', 'c'];
// let copyOfArr = arr.slice();
// copyOfArr; // => [ 'a', 'b', 'c' ];

//Shallow Copy using Spead Syntax
// let arr = ['a', 'b', 'c'];
// let copyOfArr = [...arr];
// copyOfArr; // => [ 'a', 'b', 'c' ];

//Shallow Copy using object.assign()
// let obj1 = { a: 'foo' };
// let obj2 = { b: 'bar' };

// Object.assign(obj1, obj2); // => { a: 'foo', b: 'bar' }
// obj1;                      // => { a: 'foo', b: 'bar' }


//Serializing --> Deep Copy
// let arr = [{ b: 'foo' }, ['bar']];
// let serializedArr = JSON.stringify(arr);
// let deepCopy = JSON.parse(serializedArr);


//Object.freeze()
// let obj = Object.freeze({ a: 'foo' });
// let arr = Object.freeze(['a', 'b', 'c']);

// obj['b'] = 'bar';
// obj; // => { a: 'foo' }

// arr.push('d'); // => TypeError: Cannot add property 3, object is not extensible
// arr; // => [ 'a', 'b', 'c' ]