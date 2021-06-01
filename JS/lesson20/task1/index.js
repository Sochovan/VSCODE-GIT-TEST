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

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static compare(user1, user2) {
    // статический метод он есть только у класс, а не у экземпляров, поэтому если его вызвать на console.log(user1.compare), будет undefined
    return user1.age - user2.age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }
  setAge(age) {
    if (age < 0) {
      return false;
    }
    this.age = age;
    if (age >= 25) {
      console.log(this.requestNewPhoto());
    }

    return age;
  }
}
console.log(User.sayHi);
const user1 = new User('Tom', 17);
const user2 = new User('Tom', 34);
console.log(User.compare(user1, user2));
console.log(user1);
//
// (User { name: "Tom", age: 17 }
// age: 17
// name: "Tom"
// __proto__:
// constructor: class User
// requestNewPhoto: ƒ requestNewPhoto()
// sayHi: ƒ sayHi()
// setAge: ƒ setAge(age)
// __proto__: Object)
// ----------------------------------------------------------------------

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };
// User.prototype.requestNewPhoto = function () {
//   console.log(`New photo request was sent for ${this.name}`);
// };
// User.prototype.setAge = function (age) {
//   if (age < 0) {
//     return false;
//   }
//   this.age = age;
//   if (age >= 25) {
//     console.log(this.requestNewPhoto());
//   }

//   return age;
// };
// const user1 = new User('Tom', 17);
// user1.setAge(14);
// console.log(user1);
// user1.sayHi();
// user1.requestNewPhoto();
