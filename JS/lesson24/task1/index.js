// // Работа с датами

// // Объект Date
// // Форматы даты
// // Установка, получение компонентов даты
// // Автоисправление
// // Сравнение дат
// // Часовые пояса

// new Date(0); //Thu Jan 01 1970 03:00:00 GMT+0300 (за східноєвропейським стандартним часом)
// console.log(new Date(0));

// console.log(Date.now()); //time stamp 1623241199597столько милисекунд прошло с момента этой даты

// new Date(1900, 2);
// console.log(new Date(1900, 2).getTime()); //-2203898524000

// const today = new Date();

// const date1 = new Date('December 17, 1995 03:24:00');
// const date2 = new Date(949363322003);
// const date3 = new Date(1995, 11, 17, 3, 24, 0);

// const t = new Date();
// console.log(t.getTimezoneOffset()); //-180

// // работа с компонентами даты
// // new Date(year, monthIndex[, day[, hours[, minutes[, seconds[, milliseconds]]]]]);

// // .getFullYear() или.setFullYear() и т.д.

// // .getMonth();
// // .getDate();
// // .getHours();
// // .getMinutes();
// // и т.д.
// и т же методы по гинвичу
//   .getUTCFullYear() и т.д.

// console.log(t.getFullYear()); //2021
// console.log(t.getDay()); //3 день недели, воскресенье - 0, суббота - 6ж
// ------------------------------------------------------

// const weekDays = ['Sun', 'Mon', 'Thu', 'Wed'];

// const getDayOfWeek = (date, days) => {
//   const day = new Date(date).getDate();
//   const dateInFuture = new Date(date).setDate(day + days);
//   // return new Date(dateInFuture).getDay();
//   return weekDays[new Date(dateInFuture).getDay()]; //Thu
// };

// const result = getDayOfWeek(new Date(2019, 0, 1), 14); //1547503200000
// console.log(new Date(result)); //Tue Jan 15 2019 00:00:00 GMT+0200 (за східноєвропейським стандартним часом)
// console.log(result); //2

// // --------------------------------------------------------

// // форматировать дату

// -------------------------------------------------------

// задачи из урока

// export { dayOfWeek };
const week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
const dayOfWeek = (date, days) => {
  const ourDate = new Date(date).getDate();
  console.log(ourDate);
  const resultDate = new Date(date).setDate(ourDate + days);
  return week[new Date(resultDate).getDay()];
};

console.log(dayOfWeek((1984, 2, 18), 1));
