let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
/*
function createNewArray(arrayToBeUnnest) {
  return arrayToBeUnnest.reduce((accumulator, element) => {
    return accumulator.concat(element);
  }, []);
}

console.log(createNewArray(flintstones)); */

let newArray = [].concat(...flintstones);
console.log(newArray);