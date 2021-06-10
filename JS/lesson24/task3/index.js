// export { getDiff };

// const getDiff = (startDate, endDate) => {
//   const date1 = new Date(startDate);
//   const date2 = new Date(endDate);
//   // const difference = Math.abs(Math.floor(date1 - date2));
//   const difference = Math.abs(Math.floor((date2 - date1) / 1000));
//   console.log(difference);

//   const days = Math.floor(difference / 60 / 60 / 24);
//   console.log(days);
//   let leftsec = difference - days * 24 * 60 * 60;
//   console.log(leftsec);
//   const hours = Math.floor(leftsec / 60 / 60);
//   console.log(hours);

//   leftsec = difference - days * 24 * 60 * 60 - hours * 60 * 60;
//   console.log(leftsec);
//   const min = Math.floor(leftsec / 60);

//   console.log(min);

//   const sec = difference - days * 24 * 60 * 60 - hours * 60 * 60 - min * 60;
//   console.log(sec);

//   return `${days}d ${hours}h ${min}m ${sec}s`;
// };

// console.log(getDiff(new Date(2018, 2, 5, 0, 10, 5), new Date(2021, 1, 4, 11, 40, 10)));

const getDiff = (startDate, endDate) => {
  const a = Math.abs(new Date(startDate) - new Date(endDate));

  const difference = Math.floor(a / 1000);
  console.log(difference);

  const days = Math.floor(difference / 60 / 60 / 24);
  console.log(days);
  let leftsec = difference - days * 24 * 60 * 60;
  console.log(leftsec);
  const hours = Math.floor(leftsec / 60 / 60);
  console.log(hours);

  leftsec = difference - days * 24 * 60 * 60 - hours * 60 * 60;
  console.log(leftsec);
  const min = Math.floor(leftsec / 60);

  console.log(min);

  const sec = difference - days * 24 * 60 * 60 - hours * 60 * 60 - min * 60;
  console.log(sec);

  return `${days}d ${hours}h ${min}m ${sec}s`;
};

console.log(getDiff(new Date(2021, 2, 5, 0, 10, 5), new Date(2020, 1, 4, 11, 40, 10)));
