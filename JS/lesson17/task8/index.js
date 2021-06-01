// function sayHi(phrase, who) {
//   alert(phrase + ', ' + who);
// }

// let timerId = setTimeout(sayHi, 1000, 'Привет', 'Джон');
// clearTimeout(timerId);
//

// let timerId = setTimeout(() => alert('ничего не происходит'), 1000);
// alert(timerId); // идентификатор таймера

// clearTimeout(timerId);
// alert(timerId); // тот же идентификатор (не принимает значение null после отмены)

// повторить с интервалом 2 секунды

// let timerId = setInterval(() => alert('tick'), 2000);

// // остановить вывод через 5 секунд
// setTimeout(() => {
//   clearInterval(timerId);
//   alert('stop');
// }, 5000);

// let delay = 5000;

// let timerId = setTimeout(function request() {
//   // ...отправить запрос...

//   if (ошибка запроса из-за перегрузки сервера) {
//     // увеличить интервал для следующего запроса
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);

// }, delay);

function sayHi() {
  console.log('Привет!');
}
setInterval(sayHi, 1000);
