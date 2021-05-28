// defer переадресация вызова
// переадресуем вызов на другой контекст

// defer(func,ms) => Function

// function defer(func, ms) {
//   return function () {
//     setTimeout(func, ms);
//   };
// }

// const sayHi = () => {
//   console.log('Hi');
// };

// // sayHi();

// const deferredSayHi = defer(sayHi, 1000);

// deferredSayHi();

// ===============================================================

// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func(...arguments), ms); оборачиваем func в стрелочную функцию,
// чтобы передать в нее аргументы функции function с помощью ...arguments
//   };
// }

// const sum = (a, b) => {
//   console.log(a + b);
// };

// // sayHi();

// const deferredSum = defer(sum, 1000);

// deferredSum(1, 5);

// ---------------------------------------------------------------
// // пример, чтобы обертка defer работала и с методами объекта

// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func(...arguments), ms);
//   };
// }

// const sum = (a, b) => {
//   console.log(a + b);
// };

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(`Hi, I'am ${this.name}!`);
//   },
// };

// // const deferredHi = defer(user.sayHi, 1000); //Hi, I'am ! потому что потеряли контекст

// // чтобы зафиксировать контекст
// const deferredHi = defer(user.sayHi.bind(user), 1000); //Hi, I'am Tom!
// deferredHi(); //Hi, I'am Tom!

// deferredHi.call({ name: 'Bob' }); //Hi, I'am Tom! потому что выше мы контекст жестко зафиксировали
// // чтобы это исправить
// // вверху методом call мы принимаем объект, который будет контекстом
// //  setTimeout(() => func(this, ...arguments), ms);

// // deferredHi(); //Hi, I'am Bob!
// // или тоже самое через apply - передаем массив(не разбираем на составляющие)

// //  setTimeout(() => func(this, arguments), ms);

// // deferredHi(); //Hi, I'am Bob!

// задача с урока =================================================

const callbackPrompt = {
  message: 'Tell me your number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },

  // setTimeout(() => {
  // }, 1000); принимает два аргуумента: какую функцию запустить и через какое время
  showDeferredPrompt(ms) {
    setTimeout(() => this.showPrompt(), ms);
    // или чтобы не потерять контекст использовать метод .bine()
    // setTimeout(this.showPrompt.bind(this), ms);
  },
};

callbackPrompt.showDeferredPrompt(1000);
