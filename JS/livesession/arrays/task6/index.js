// const array = [
//   "Andrey",
//   "Denis",
//   "Alex",
//   "Nastya",
//   "Ninja",
//   "Skywoker",
//   "Joda",
//   "Leo",
// ];

// function printArray(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i]);
//   }
// }

// function printArrayForOf(arr) {
//   for (let el of arr) {
//     console.log(el);
//   }
// }
// printArrayForOf(array);
// ============================================================
// ("use strict");

// /* ==================================== */
// /* ===> мутирующие методы массивов <=== */
// /* ===> изменяют исходный массив <===== */
// /* ==================================== */

// /* push - добавит элемент в конец массива */

// /**
//  * С помощью метода push добавь число 111 в конец массива arr
//  * Выведи в консоль результат работы метода push, а так же массив arr после выполнения push
//  */

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.push(111);
// console.log(arr);
// console.log(newArr);

// // put your code here

// /* pop - удалит из массива последний элемент и вернет его */

// /**
//  * С помощью метода pop удали последний элемент массива students
//  * Выведи в консоль результат работы метода pop, а так же массив students после выполнения pop
//  * */

// const students = ["Alex", "Ann", "Jaz", "Viktor"];
// const res = students.pop();
// console.log(res);
// console.log(students);

// // put your code here

// /* shift - удалит из массива первый элемент и вернет его */

// /**
//  * С помощью метода shift удали первый элемент массива points
//  * Выведи в консоль результат работы метода shift, а так же массив points после выполнения shift
//  * */

// const points = [11, 24, 37, 40, 7];
// const res1 = points.shift();
// console.log(res1);
// console.log(points);

// // put your code here

// /* unshift - добавит элемент в начало массива */

// /**
//  * С помощью метода unshift добавь число 22 в начало массива ages
//  * Выведи в консоль результат работы метода unshift, а так же массив ages после выполнения unshift
//  * */

// const ages = [18, 25, 31, 29, 50, 11, 1000000];
// const newRes = ages.unshift(22);
// console.log(newRes);
// console.log(ages);
// // put your code here

// /* ======================================= */
// /* ===> НЕ мутирующие методы массивов <=== */
// /* ===> НЕ изменяют исходный массив <===== */
// /* ======================================= */

// /* includes - проверяет есть ли элемент в массиве */

// /**
//  * С помощью метода includes проверь есть ли числа 0 и 100 в массиве numbers. Результат проверок выведи в консоль
//  */
// const numbers = [5, 0, 8, 10, -4, 50, 220];

// console.log(numbers.includes(100));
// console.log(numbers.includes(0));

// // put your code here
// =============================================================

// function addPoints(points, homeTeam, awayTeam, result) {
//   const copy = points.slice();

//   if (result === "win") {
//     copy[homeTeam - 1] += 3;
//   } else if (result === "lose") {
//     copy[awayTeam - 1] += 3;
//   } else {
//     copy[homeTeam - 1] += 1;
//     copy[awayTeam - 1] += 1;
//   }
//   return copy;
// }

// const arr = [45, 44, 43, 35, 25, 13, 2];
// console.log(addPoints(arr, 4, 5, "ho"));

// =============================================================
// function sendEmail(userName) {
//   console.log("Gromcode party invitation was sent to " + userName + "!");
// }

// function sendEmailList(userNames) {
//   userNames.map((el) => sendEmail(el));
// }

// sendEmailList(array);

// ================================================================
function getRevenue(sales) {
  return sales.reduce((acc, el) => acc + el);
}

function checkRevenue(sales, plannedRevenue) {
  const rev = getRevenue(sales);
  return rev >= plannedRevenue;
}

// examples
console.log(getRevenue([0, 0, 25, 0])); // returns ==> 133
console.log(checkRevenue([0, 40, 10, 10], 100)); // returns ==> true

// ================================================================
// function reverseArray(arr) {
//   const copy = arr.slice();
//   return copy.reverse();
// }

// // examples
// console.log(reverseArray([11, 4, 8, 3])); // ==> [3, 8, 4, 11]
// reverseArray([]); // ==> []
// reverseArray([100, 50]); // ==> [50, 100]
// =============================================================
// const getSubArray = (arr, numberOfElements) => {
//   const newArr = arr.slice(0, numberOfElements);
//   return newArr;
// };

// // examples
// console.log(getSubArray([11, 4, 8, 3], 2)); // ==> [11, 4]
// getSubArray([1, 2, 3, 4, 5], 3); // ==> [1, 2, 3]
// getSubArray(["some string", "hello", "I am happy"], 1); // ==> ['some string']

// ==========================================================

function sum(from, to) {
  let sum = 0;

  for (let index = from; index <= to; index += 1) {
    sum += index;
  }
  return sum;
}

function compareSums(a, b, c, d) {
  const sum1 = sum(a, b);
  const sum2 = sum(c, d);
  if (sum1 > sum2) {
    return true;
  }
  return false;
}

sum(2, 4);
