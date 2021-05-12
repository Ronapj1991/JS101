function greetings(array, object) {
  let name = array.join(' ');
  let job = object['title'] + ' ' + object['occupation'];
  
  return `Hello, ${name}! Nice to have a ${job}.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
  );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.