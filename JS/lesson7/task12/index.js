const arrAverage = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const arrAverage = arr.reduce((acc, elem) => acc + elem) / arr.length;
    return arrAverage;
};
const arrInit = [1, 3, 7, 8, 9, 37];
console.log(arrAverage(arrInit));