// getMaxAbsoluteNumber максимальное по модулю

// Math.abs(-18) / 18
// Math.abs(18) / 18

// [2, -6, 78, -99] => 99

// const getMaxAbsoluteNumber = arr => {
//     let max = -Infinity;
//     arr.forEach(num => {
//       if (Math.abs(num) > max) {
//         max = Math.abs(num);
//         }

//     });
//   return max;
// }

// better option--------------------------------------------------------
//1- find absolute values
// 2 - find max
const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const absoluteValues = arr
        .map(num => Math.abs(num));

    const max = Math.max(...absoluteValues);
    return max;

}