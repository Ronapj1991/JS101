function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return //JavaScript automatically inserts a semicolon here
  {
    prop1: "hi there"
  };
}

console.log(first()); // "hi there"
console.log(second());// undefined