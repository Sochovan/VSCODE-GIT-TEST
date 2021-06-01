// const timer = {
//   secondsPassed: 0,
//   minsPassed: 0,
//   startTimer() {
//     this.secondsPassed += 1;
//     console.log(this.secondsPassed);

//   },
//   setInterval(timer.startTimer.bind(timer), 1000)
// };

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    this.secondsPassed += 1;
    console.log(this.secondsPassed);
    setInterval(() => timer.startTimer(), 1000);
  },
};

// let secondsPassed = 0;

// function startTimer() {
//   secondsPassed += 1;
//   console.log(secondsPassed);
// }
// setInterval(startTimer, 1000);

//     getTime(time) {
// return `${minsPassed} : ${secondsPassed}`
//     }
//     stopTimer() {
//         clearInterval()
//     }
//     resetTimer() {

//     }
// };

// function sayHi() {
//   console.log('Привет!');
// };
// setInterval(sayHi, 1000);

// const bind = function (func, context) {
//   let bindArgs = [].slice.call(arguments, 2);
//   return function () {
//     let funcArgs = [].slice.call(arguments);
//     return func.apply(context, bindArgs.concat(funcArgs));
//   };
// };

// ======================================================================================

// export { bind };

// const bind =
//   (func, context, arg1, arg2) =>
//   (...argn) =>
//     func.apply(context, argn.concat(arg1, arg2));
