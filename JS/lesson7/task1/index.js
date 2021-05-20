// first solution--------------------------------------

// for (let i = 0; i < numbers.length; i++) {

//     if (numbers[i] % 3 === 0) {
//         specialNumbers.push(numbers[i]);
//     }
// } 

// second solution (.forEach())------------------------------------

// const getSpecialNumbers = numbers => {
//   let specialNumbers = [];

//   function checkIfSpecialNumber(num) {
//       if (num % 3 === 0) {
//           specialNumbers.push(num);
//       }
//   }

//   numbers.forEach(checkIfSpecialNumber);


//   return specialNumbers;
// };

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(getSpecialNumbers(arr));


// third solution (.forEach()short)---------------------------------------


// const getSpecialNumbers = numbers => {
//     let specialNumbers = [];


//     numbers.forEach(function(num) {
//         if (num % 3 === 0) {
//             specialNumbers.push(num);
//         }
//     });


//     return specialNumbers;
// };

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(getSpecialNumbers(arr));


// fourth solution (.filter())---------------------------

// const getSpecialNumbers = numbers => {
//     let specialNumbers = [];


//     const result = numbers.filter(num => {
//         if (num % 3 === 0) {
//             return true;
//         }
//         return false;
//     });


//     return result;
// };

// const arr = [1, 2, 3, 4, 5, 6, 18];
// console.log(getSpecialNumbers(arr));

// fifth solution (.filter() short тернарный оператор)---------------------------------


// const getSpecialNumbers = numbers => {


//     const result = numbers.filter(num =>
//         // return num % 3 === 0 ? true : false; или еще короче

//         // return num % 3 === 0; и еще короче 
//         num % 3 === 0 // если у фнукции один ретерн, можно убрать {} и return
//     );


//     return result;
// };

// const arr = [1, 2, 3, 4, 5, 6, 18, 15];
// console.log(getSpecialNumbers(arr));

// sixth solution .filter() very short----------------------

// const getSpecialNumbers = numbers => {

//         return numbers.filter(num => num % 3 === 0);

//         const arr = [1, 2, 3, 4, 5, 6, 18, 15];
//         console.log(getSpecialNumbers(arr));

//         //  или 


const getSpecialNumbers = numbers =>
    numbers.filter(num => num % 3 === 0);

const arr = [1, 2, 3, 4, 5, 6, 18, 15];
console.log(getSpecialNumbers(arr));