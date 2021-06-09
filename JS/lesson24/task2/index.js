// // Форматировать дату

// const t = new Date();
// console.log(t.toDateString()); //Wed Jun 09 2021

// console.log(t.toGMTString()); //Wed, 09 Jun 2021 12:54:38 GMT время в гринвиче

// // с помощью встроенного объекта форматировать дату и время
// // Intl

// const formatter = new Intl.DateTimeFormat('en', {
//   timeZone: 'UTC', //время по гринвичу
//   hour: '2-digit',
//   minute: '2-digit',
//   hour12: false,
// });

// const getTime = date => formatter.format(date);

// console.log(getTime(new Date())); //15:58
// // ---------------------------------------------------------

// // форматтер Date.UTC

// console.log(Date.UTC(2021, 0, 1, 13, 30)); //1609507800000

// console.log(new Date(Date.UTC(2021, 0, 1, 13, 30))); //Fri Jan 01 2021 15:30:00 GMT+0200 (за східноєвропейським стандартним часом)
// --------------------------------------------------------

//задача из урока

const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const getGreenwichTime = date => formatter.format(date);
console.log(getGreenwichTime(new Date()));
