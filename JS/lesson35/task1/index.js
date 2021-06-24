// Обработка ошибок

window.addEventListener('error', function onUnhandledError(err) {
  console.error('error', err.message);
});

const data = '{"name":"Nastya"}';

let userParsingResult;
console.log(userParsingResult);
try {
  const user = JSON.parse(data);
  console.log('User data: ', user);
  userParsingResult = 'success';
  console.log(userParsingResult);
} catch (e) {
  userParsingResult = 'error';
  console.log(userParsingResult);
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}
console.log(userParsingResult);

let productParsingResult;

const data1 = '{"name":"Nastya"';
try {
  const product = JSON.parse(data1);
  console.log('Product data: ', product);
  productParsingResult = 'success';
} catch (e) {
  productParsingResult = 'error';
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}
