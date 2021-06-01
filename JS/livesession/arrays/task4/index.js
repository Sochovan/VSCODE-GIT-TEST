// input: num, num, ...numN
// ouptput: number

function multiply(...args) {
  // array

  // console.log(arguments);
  // for (let el of arguments) {
  //   console.log(el);
  // }

  // rest operator
  // console.log(argument);
  console.log(args);
  return args.reduce((acc, el) => acc * el);
}

console.log(multiply(2, 5, 10));

// =============================

const array = [1, 3, 6, 8, 3];
console.log(...array);

const arrayCopy = [...array];
console.log(arrayCopy);

// =====================================
// sort
//

// callback: input: element1, element2;
// output: number;

const arr = [4, 2, 3, 11, -10, -2];

const sortRes = [...arr].sort((el1, el2) => {
  // el1 > el2;
  // el1 === el2;
  // el1 < el2;
  return el1 - el2;
});

console.log(sortRes);
