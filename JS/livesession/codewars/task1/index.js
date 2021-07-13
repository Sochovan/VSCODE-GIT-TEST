// function positiveSum(arr) {
//   return arr.reduce((acc, num) => {
//     if (num > 0) {
//       acc += num;
//     }
//     return acc;
//   }, 0);
// }

function positiveSum(arr) {
  return arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);
}

const arrTest = [1, -4, 7, 12];
console.log(positiveSum(arrTest));

// Algo:
// 1. Used reduce to sum num
// 2. if arr empty return 0;
