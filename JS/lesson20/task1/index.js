// Классы в Javascript
// определение класса
// конструктор
// свойства и методы
// наследования
// защищенные / приватные методы и поля
// instanceof
// Классы тоже функции
// их нелзя называть без new
// методы неперечислимые
// код внутри класса выполняется в строгом режиме ('use strict')

// одно и тоже запишем через функцию-конструткор и класс (соотв. 1 и2)

// 1.

// function User(name, age) {
//   this.role = 'viewer';
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// User.run = function () {
//   console.log('Running');
// };

// User.senseOfLife = 42;

// 2.

// class User {
//   role = 'viewer'; //свойство класса
//   static senseOfLife = 42; //статическое свойство

//   constructor(name, age) {
//     this.name = name; //свойство класса
//     this.age = age;//свойство класса
//   }

//   static run() { //статический метод
//     console.log('Running');

//   }

//   sayHi() { //метод
//     console.log(`Hi, I am ${this.name}`);
//   }
// }

// ==================================================================
// задача1
