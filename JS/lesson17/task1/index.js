// Контекст выполнения функции

// функции, которые хранятся в свойсвтах объекта называются методами этого объекта
// this - это ссылка на объект, который владеет методом

// const user = {
//   name: 'John',
//   age: 17,
// };

// user.sayHi = function () {
//   console.log(`Hi, I am ${this.name}.`);
// };

// user.sayHi();
// второй вариант записи сразу в объект--------------------------
// const user = {
//   name: 'John',
//   age: 17,
//   sayHi: function () {
//     console.log(`Hi, I am ${this.name}.`);
//   },
// };

// user.sayHi();

// третий вараинт-------------------------------------------
// const user = {
//   name: 'John',
//   age: 17,
//   sayHi() {
//     console.log(`Hi, I am ${this.name}.`);
//   },
// };

// user.sayHi();

// пример-----------------------------------------------------------
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// user.getFullName();

// const func = user.getFullName;

// func(); //undefined undefined потому что this ссылается на объект перед точкой, а перед func() ничего нет
// ----------------------------------------------------------------
// методы, которые позволяеют управлять/закреплять контекст
// .bind()
// const user = {
//   name: 'John',

//   getFullName() {
//     console.log(this.name);
//   },
// };

// // user.getFullName();

// // const func = user.getFullName.bind(user);
// const func = user.getFullName.bind({ name: 'Tom' }); //Tom
// // можно тут же объект и обявить, ск оторого будет брать контекст
// // this будет ссылаться на этот объект, а не на user.name: 'John'
// // но если у user такого свойства в объекте не будет то получаем undefined
// // const func = user.getFullName.bind({ n: 'Tom' }); // undefined

// func();

// .bind(); возвращает функцию и привязывает контекст к функции
// и этот контекст дальше менять нельзя

// --------------------------------------------------------
// метод .call(); принимает объект, который будет контекстом вызова функции
// в нашем случае func.call({ });

// const user = {
//   name: 'John',

//   getFullName() {
//     console.log(this.name);
//   },
// };

// const func = user.getFullName;

// func.call({ name: 'Tom' }); //Tom

// метод .apply()------------------------------------------------------

// const user = {
//   name: 'John',
//   sayHi(age, message) {
//     console.log(`${message}. I'm ${this.name}. I'm ${age} years old`);
//   },
// };

// const func = user.sayHi(17, 'Hello'); //Hello. I'm John. I'm 17 years old
// func(17, 'Hello');

// func.apply({ name: 'Tom' });

// --------------------------------------------------------------
// const func = user.sayHi; //Hello. I'm John. I'm 17 years old

// // аргументы передаем массивом
// func.apply({ name: 'Tom' }, [17, 'Hello']); // у нас два аргумента в функции sayHi в объекте user, поэтому передаем два элемента в массив
// func.call({ name: 'Tom' }, 17, 'Hello'); //аргументы переадем через,
// можно создать переменную и присвоить ей контекст
// const anotherUther = {
//   name: 'Tom'
// };

//   func.call(anotherUther, 17, 'Hello');
// func.apply(anotherUther, [17, 'Hello']);

// ==========================================

// пример - задача обїекта показівать пользователю на странице поп-ап типа оставьте свою инфу и мы с вами свяжемяс

// ===========================================
// const callbackPrompt = {
//   message: 'Tell me your number',
//   showPrompt() {
//     const phoneNumber = prompt(this.message);
//     console.log(phoneNumber);
//   },

//   // setTimeout(() => {
//   // }, 1000); принимает два аргуумента: какую функцию запустить и через какое время
//   showDeferredPrompt(ms) {
//     setTimeout(() => this.showPrompt(), ms);
//     // или чтобы не потерять контекст использовать метод .bine()
//     // setTimeout(this.showPrompt.bind(this), ms);
//   },
// };

// callbackPrompt.showDeferredPrompt(1000);

// задачи с урока-------------------------------------------------

const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());
