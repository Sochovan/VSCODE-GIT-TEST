// const sum = (...promiseNumbers) => {
//   return Promise.all(promiseNumbers);
// };
const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

const resultPromise = Promise.all([promiseNumber1, promiseNumber2, promiseNumber3]);

resultPromise
  .then(numbersList => {
    console.log(numbersList);
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum;
  })
  .then(result => {
    console.log(result); // 98
  });

// // --------------------------------------------------------
// const getValueWithDelay = (value, delay) =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(value);
//       resolve(value);
//     }, delay);
//   });

// const asyncNum1 = getValueWithDelay(56, 1000);
// const asyncNum2 = getValueWithDelay(undefined, 2000);
// const asyncNum3 = getValueWithDelay('10', 3000);

// const getSum = numbers =>
//   numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + Number(num), 0);

// const asyncSum = (...asyncNumbers) => {
//   return Promise.all(asyncNumbers)
//     .then(numbers => getSum(numbers))
//     .catch(() => Promise.reject(new Error("Can't calculate")));
// };

// // asyncSum(asyncNum1, asyncNum2, asyncNum3).then(result => console.log(result));

// asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3).then(result =>
//   console.log(result),
// );
