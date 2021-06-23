'use strict';
// function printMessage(country, city) {
//   console.log(this);
//   console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
// }
// const user = {
//   firstName: 'Andrey',
//   age: 111,
//   tempFunc: 'some secret data',
// };

// console.dir(printMessage);

// const printMessage1 = printMessage.bind(user, 'Ukraine');
// printMessage1('London');

function myBind(func, context, ...args) {
  console.log(args);
  // input: arg1, .... argN
  // output: anything
  return function (...funcArgs) {
    console.log('func is called');
    return func.call(context, ...args, ...funcArgs);
  };
}

function sum(c, d) {
  console.log('context is:', this);
  console.log('arguments is:', arguments);
  return this.a + this.b + c + d;
}
const context = {
  a: 100,
  b: 40,
};

const sumBinded1 = myBind(sum, context);
console.dir(sumBinded1);
console.dir(sumBinded1());
console.dir(sumBinded1(10, 30));

const sumBinded2 = myBind(sum, context, 10, 30);
console.dir(sumBinded2());

const sumBinded3 = myBind(sum, context, 10);
console.dir(sumBinded3(30));
