// Функции - некоторые продвинутые техники

// Чейнинг
// Рекурсия
// Каррирование
// Композиция
// Некоторые принципы разработки

// calc(3).add(2).mult(4).div(10).substract(5).result(); //-3
// S - Single Responsibility
// O - Open-Closed
// L - Liskov Substitution
// I - Interface Segregation;
// D - Dependency Inversion

// YAGNY - You aren't gonna need it

// DRY - Don't repeat yourself;

// Чейнинг, когда методы объекта возвращают ссылку на сам объект;

// const calc = initValue => {
//   let result = initValue;
//   const calculator = {
//     add(value) {
//       result += value;
//       return calculator; //return this тоже самое
//     },
//     mult(value) {
//       result *= value;
//       return this;
//     },
//     substract(value) {
//       result -= value;
//       return this;
//     },
//     div(value) {
//       result /= value;
//       return this;
//     },
//     result() {
//       return result;
//     },
//   };
//   return calculator;
// };

// const result = calc(3).add(2).mult(4).div(10).substract(5).result();
// console.log(result);

// ==============================================================

const calc = number => {
  let result = number;

  const calculator = {
    add(value) {
      result += value;
      return this;
    },

    substract(value) {
      result -= value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};
const result = calc(3).add(2).mult(4).div(10).substract(5).result();
console.log(result);
