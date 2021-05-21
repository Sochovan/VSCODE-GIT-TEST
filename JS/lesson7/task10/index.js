//put your code here

// const sum = arr => {
//     if (!Array.isArray(arr)) {
//         return null;
//     }

//     const sum = arr.reduce((acc, elem) => acc + elem);
//     return sum;
// }

const sum = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }

    return arr.reduce((acc, elem) => acc + elem);

}