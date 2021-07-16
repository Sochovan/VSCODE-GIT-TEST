// function isLetter(c) {
//   return c.toLowerCase() !== c.toUpperCase();
// }

// function isValidWord(str) {
//   const array = str.split("");

//   return array.every(isLetter) && array.length >= 2;
// }

// // examples
// console.log(isLetter("h")); // ==> true
// console.log(isLetter("W")); // ==> true
// console.log(isLetter("@")); // ==> false
// console.log(isLetter("1")); // ==> false

// console.log(isValidWord("hello")); // ==> true
// console.log(isValidWord("Hello")); // ==> true
// console.log(isValidWord("Test@")); // ==> false
// console.log(isValidWord("someName1")); // ==> false
// console.log(isValidWord("It is me")); // ==> false

// =============================================================================
// function capitalize(str) {
//   let newStr = str.slice(1);
//   console.log(newStr);
//   let cap = str[0].toUpperCase();

//   console.log(cap);
//   return cap.concat(newStr);
// }

// // examples
// console.log(capitalize("cake")); // ==> Cake
// console.log(capitalize("Monday")); // ==> Monday
// capitalize("hello, it is me"); // ==> Hello, it is me

// ==================================================================
// function getAbbreviation(str) {
//   const array = str.split(" ");
//   let newStr = "";
//   console.log(array);
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > 2) {
//       newStr += array[i][0].toUpperCase();
//     }
//   }
//   return newStr;
// }

// // examples
// console.log(getAbbreviation("some company name")); // ===> SCN
// console.log(getAbbreviation("Union of Soviet Socialist Republics")); // ===> USSR
// console.log(getAbbreviation("United States")); // ===> US

// =================================================================

function camelCase(str) {
  return str
    .toLowerCase()
    .trim()
    .split(" ")
    .reduce((acc, word) => acc + word[0].toUpperCase() + word.slice(1));
}

// examples
console.log(camelCase("some function name")); // ===> someFunctionName
console.log(camelCase("get message")); // ===> getMessage
camelCase("render tasks list"); // ===> renderTasksList
