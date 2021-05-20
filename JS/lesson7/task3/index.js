// [1, [2, 3, 4], 5, [6]] => [1, 2, 3, 4, 5, 6]
//.reduce(), .concat();



// const flatArray = arr => {
//     const flatArray = arr
//         .reduce((acc, elem) => {
//             return acc.concat(elem);
//         }, []);
//     return flatArray;
// };

// const initArray = [1, [2, 3, 4], 5, [6]];

// console.log(flatArray(initArray));


// short-------------------------------------------


// const flatArray = arr => arr
//     .reduce((acc, elem) => {
//         return acc.concat(elem);
//     }, []);


// const initArray = [1, [2, 3, 4], 5, [6]];

// console.log(flatArray(initArray));

// the best (.flat())--------------------------------------

const flatArray = arr => arr.flat();

const initArray = [1, [2, 3, 4], 5, [6]];

console.log(flatArray(initArray));