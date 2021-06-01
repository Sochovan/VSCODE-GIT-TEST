// 'use strict';

// Контекст выполнения(часть 2)ж
//  Глобальный объект и 'strict mode
// This в стрелочных функциях
// Заимствование  методов

// event (this in arrow functions)

// const obj = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this.name); //Tom
//     console.log(this); //Window {window: Window, self: Window, document: document, name: "", location: Location, …}
//     // Глобальный объект;
//     // globalThis - window, globalThis
//     // хранит значение, которые доступны в любой части программы

//     // var создает свойство в глобальном объекте =- это плохо
//     // глобальные функции становятся свойствами глобального объекта - сводим их кол-во к минимуму
//     // если что-то нуъжно хранить в глобальном объекте,
//     // то указываем явно window.userId = '12345' или
//     window.user{
//       name:
//       id:
//       },
//   };
// }

// obj.sayHi();

// const func = obj.sayHi;

// func(); //потеря контекста - ничего не выдаст

// var a = 1;
// console.log(window.a); //1;
// let b = 2;
// console.log(window.b); //undefined;

// ===================================================================
// 'use strict' - строгий режим
// по умолчанию выключен;
// всегда включен в модулях и классахж

// 'use strict';

// const obj = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this); //undefined;
//   },
// };

// const func = obj.sayHi;

// func();
// console.log(this); //Window {window: Window, self: Window, document: document, name: "", location: Location, …}

// function func() {
//   console.log(this);
// }

// func(); //undefined;

// // ==================================================================
'use strict';

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this);
//   },
// };

// // user.sayHi();
// // setTimeout(user.sayHi, 100); // когда мы передаем функцию как олбек, то происходит потеря контекста и мы переходим в глобальный объект
// // это можно исправить с помощью .bind, строго зафиксировав контекст

// setTimeout(user.sayHi.bind(user), 100); //{name: "Tom", sayHi: ƒ}

// ===================================================================

// const Event = {
//   guests: [
//     { name: 'Tom', email: 'a@gmail.com', age: 17 },
//     { name: 'Bob', email: 'b@gmail.com', age: 18 },
//   ],
//   message: 'Welcome to the party',
//   getInvitations() {
//     return this.guests
//       .filter(({ age }) => age >= 18)
//       .map(({ name, email }) => ({
//         text: `Hi ${name}. ${this.message}`,
//         email,
//       }));
//   },
// };

// console.log(Event.getInvitations());
// //  пользуемся стрелочной функций потому что у нее нет своего контекста, и она пользуется внешним

const Event = {
  guests: [{ name: 'John', age: 18, email: 'example@server.com' }],
  message: `Welcome to the party!`,
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ email, name }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(Event.getInvitations());
