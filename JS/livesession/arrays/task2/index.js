// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];
//
// input: Callback, object(optional);
//  input: elem, index(opt), array(opt)
//  output: modified elem;
// output: array;

const students = ['Roman', 'Alex', 'Yulia', 'Olga', 'Vlad'];

// function mapCallback(el) {
//   return 'Hello, ' + el;
// }

// const greeting = students.map(el => `Hello, ${el}`);

// // const greeting = students.map(mapCallback);
// console.log(greeting);

const greeting = students
  .filter(el => {
    if (el === 'Roman') {
      return false;
    }
    return true;
  })
  .map(el => {
    return `Hello, ${el}`;
  });

console.log(greeting);

/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведи squaredNumbers в консоль

// put your code here

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль

// put your code here

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList

// put your code here

/* метод reduce */
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: callback, initial acc value (opt)
// callback:
// input: accumul, element, index (opt), array (opt)
// output: number
// output: number

// function reduceCallback(acc, elem, index, array) {
//   console.log('STEP #' + index);
//   console.log('element ' + elem);
//   console.log('acc: ' + acc);
//   if (elem > 100) {
//     acc += elem;
//   }
//   return acc;
// }

// const transactionSum = transactions.reduce(reduceCallback, 0);
// console.log(transactionSum);

function reduceCallback(acc, elem, index, array) {
  console.log('STEP #' + index);
  console.log('element ' + elem);
  console.log('acc: ' + acc);
  if (elem > 100) {
    acc.push(elem);
  }
  return acc;
}

const bigTransactionSum = transactions.reduce(reduceCallback, []);
console.log(bigTransactionSum);
// put your code here

/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];

// put your code here

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

const numbersList2 = [6, 20, 33, 43, 8];

// put your code here
