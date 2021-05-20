//  unsorted array => sorted array


// first solution (.sort())---------------------------
// const sortArray = numbers => {
//     function compare(a, b) {
//         if (a > b) {
//             return 1;
//         }
//         return -1;
//     }

//     numbers.sort(compare);

//     return numbers;
// };

// const arr = [2, 4, 30, 1, 5, 21, 18];
// console.log(sortArray(arr));


// second solution (.sort() тернарный)---------------------------
// const sortArray = numbers => {
//     function compare(a, b) {
//         return a > b ? 1 : -1;
//     }

//     numbers.sort(compare);

//     return numbers;
// };

// const arr = [2, 4, 30, 1, 5, 21, 18];
// console.log(sortArray(arr));


// second solution (.sort() short)-----------------------

// const sortArray = numbers => {

//     // numbers.sort((a, b) => (a > b ? 1 : -1)); или
//     numbers.sort((a, b) => a - b);

//     return numbers;
// };

// const arr = [2, 4, 30, 1, 5, 21, 18];
// console.log(sortArray(arr));



// чтобы изначальный массив не менять, а получить другой массив 
// на выходе (отсортированный) нужно создать его копию 
// и работать с ней--------------------------------


// const sortArray = numbers => {
//     const copy = [...numbers];
//     // или const copy = numbers.slice();
//     copy.sort((a, b) => a - b);

//     return copy;
// };

// const arr = [2, 4, 30, 1, 5, 21, 18];
// console.log(sortArray(arr));


// shortest----------------------------------------------
// const sortArray = numbers => {

//     // const copy = numbers.slice();
//     // return copy.sort((a, b) => a - b);

//     // или 
//     return numbers.slice().sort((a, b) => a - b);
// };

// const arr = [2, 4, 30, 1, 5, 21, 18];
// console.log(sortArray(arr));
// console.log(arr);


// the best-------------------------------------------------

const sortArray = numbers => numbers.slice().sort((a, b) => a - b);

const arr = [2, 4, 30, 1, 5, 21, 18];
console.log(sortArray(arr));
console.log(arr);