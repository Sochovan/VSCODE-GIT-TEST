// Algo

// 1. create result arr
// 2. iterate numbers from 2 to integer/2
// 3. if integer % number === 0 => push to arr
// 4. if result.length ? result : `${integer} is prime`

// function divisors(integer) {
//   const res = [];
//   for (let index = 2; index <= integer / 2; index += 1) {
//     if (integer % index === 0) {
//       res.push(index);
//     }
//   }
//   if (!res.length) {
//     return `${integer} is prime`;
//   }

//   return res;
// }

// console.log(divisors(12)); // should return [2,3,4,6]
// console.log(divisors(25)); // should return [5]
// console.log(divisors(13)); // should return "13 is prime"

function divisors(integer) {
  const res = [];

  for (let index = 2; index <= integer / 2; index += 1) {
    if (integer % index === 0) {
      res.push(index);
    }
  }

  return res.length ? res : `${integer} is prime`;
}
console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"
