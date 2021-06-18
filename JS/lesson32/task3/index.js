/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = num => {
  const pr = new Promise(resolve => {
    resolve;
  });
};

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});
