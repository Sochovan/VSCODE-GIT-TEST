"use strict";
// function sumOfMillions() {
//   let sum = 0;

//   for (let i = 1; i <= 5; i += 1) {
//     sum += i;
//   }
//   console.log(sum);
//   return sum;
// }

// console.log(123);
// ============================================================

// function factorial(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5));
// =========================================================
// const sum = (a, b) => {
//   let result = 0;
//   for (let i = a; i <= b; i += 1) {
//     result += i;
//   }
//   return result;
// };

// function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
//   return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
// }

// // examples
// // console.log(sum(5, 10)); // ===> 45
// // console.log(sum(11, 11)); // ===> 11

// console.log(compareSums(5, 10, 5, 10)); // ===> false
// console.log(compareSums(5, 15, 3, 5)); // ===> true
// console.log(compareSums(-2, 5, 5, 9)); // ===> false

// ====================================================

function sendEmail() {
  console.log("Gromcode party invitation was sent!");
}

function sendEmailList() {
  let result = 0;
  for (let i = 1; i <= 30; i += 1) {
    result += i;
  }
  return sendEmail(result);
}
