//  Контекст выполнения функции this - это ссылка на объект, владеющий вызовом функции
// this - это объект перед точкой, с которого функция берет данные, но в то
// случае если этот метод сразу же вызывается
// this определяется в момент вызова функции
//  с помощью методов мы можем управлять контекстом
// .bind(thisArg[, arg1[, arg2[, ...]]]) вызывается на функции, это метод функции и создает дургую функцию с зафиксированным контекстом
// .apply(thisArg, [argsArray]) сразу же вызывает функцию с определенным контекстом и аргументами
// .call(thisArg, arg1, arg2, ...) сразу же вызывает функцию с определенным контекстом и аргументами

// Глобальный объект
// globalThis - window, global,
// хранит значение, который доступны в любой части программы
// var создает свойства глобального объекта - это плохо
// глобальные функции становятся свойствами глобального объекта - сводим их кол-во к минимум
// если что-то таки нужно хранить на глобальном объекте, то указываем это явно window.userId = '12345'
//  функция стрелка не имеет своего контекста и она ссылается на внешний
'use strict';
const timer = {
  secondsPassed: 0,
  minutesPassed: 0,
  intervalId: null,
  startTimer() {
    // +++
    // console.log('CONTEXT of startTimer IS', this);
    // input: func, ms;
    // output: num;
    // lose context caase #1
    this.intervalId = setInterval(() => {
      console.log('CONTEXT of callback IS', this);
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minutesPassed += 1;
      }
    }, 1000);
  },
  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minutesPassed}:0${this.secondsPassed}`;
    }
    return `${this.minutesPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    //
    console.log(this);
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.minutesPassed = 0;
    this.secondsPassed = 0;
  },
};
// console.log(timer);
// timer.startTimer();
timer.stopTimer();
timer.startTimer();
// console.log(this);
// lose context caase #1
// const func = timer.startTimer
// func()
// example callback lose context
// console.log(
//   [1, 5, 10, 19].filter(
//     function (el) {
//       console.log(this);
//       return el > 5;
//     }.bind(timer),
//   ),
// );
