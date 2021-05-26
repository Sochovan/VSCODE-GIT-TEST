// const message = 'Have a good day!';

// function sendMassege(name) {
//   let greeting = 'Hi, ';

//   if (name) {
//     const greeting = 'Hello, ';
//     const name = 'Tad';
//     console.log(greeting + name);
//   } else {
//     console.log(message);
//   }
// }

// sendMassege('Ann');

// цикл особенность-------------------------------------

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);

const createCalculator = () => {
  let a = 0;
  console.log(a);

  const getMemo = () => a;
  console.log(getMemo());

  const add = num => (a += num);
  console.log(add(8));
  const decrease = num => (a -= num);
  console.log(decrease(6));
  const reset = () => (a = 0);
  console.log(reset());

  return {
    getMemo,
    add,
    decrease,
    reset,
  };
};

// export { createCalculator };
console.log(createCalculator());
