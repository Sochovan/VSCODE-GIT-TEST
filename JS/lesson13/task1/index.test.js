//Unit - test, Jest
// отдельные программы, которые проверяют наш код

// NodeJS - серверный JS позволяет запускать скрипті не в браузере а на сервере или на компе
// npm - note package Manager код, который разработал другие, лежит в определенном месте
// jest test framework
// -----------------------------------------------------------------------
// unit test состоит из функции,в котором есть сообщение что проверять и функция
it('17 и в Африке 17', () => {
  expect(17).toEqual(17);
});
it('18 это вам не 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = numbers => numbers.filter(num => num % 2 === 0);

it('should get only even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);

  expect(result).toEqual([2, 4]);
});
