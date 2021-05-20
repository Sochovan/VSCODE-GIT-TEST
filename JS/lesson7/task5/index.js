// const squareArray = arr => {
//     if (!Array.isArray(arr)) {
//         return null;
//     }

//     let squareArray = [];

//     function square(elem) {
//         {
//             squareArray.push(elem ** 2);
//         }
//     }
//     arr.forEach(square);


//     return squareArray;

// };

// const initArr = [1, 2, 3, 4];
// console.log(squareArray(initArr));

const squareArray = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const squareArray = arr.map(elem => elem ** 2);
    return squareArray;
};

const initArr = [1, 2, 3, 4];
console.log(squareArray(initArr));