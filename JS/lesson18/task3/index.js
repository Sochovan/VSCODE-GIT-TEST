// Псевдомассивы

// function func() {
//   console.log(arguments);
// }

// func(1, 2, 3, 4); //Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function argsSum() {
//   return [].reduce.apply(arguments, [
//     (acc, elem) => {
//       return acc + elem;
//     },
//     0,
//   ]);
// }

// console.log(argsSum(1, 2, 3, 4)); //10

// или из псевдомассива сделать обычный массив

// function argsSum() {
//   return [...arguments].reduce((acc, elem) => {
//     return acc + elem;
//   }, 0);
// }

// console.log(argsSum(1, 2, 3, 4)); //10

function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => acc + elem ** 2);
}

console.log(sumOfSquares(1, 2, 3, 4));
