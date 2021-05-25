export default (arr) => {
    if (!Array.isArray(arr) || arr.lenth === 0) {
        return null;
    }

    const result = arr.map(elem => Math.abs(elem));
    const min = Math.min(...result);
    return min ** 2;

};


console.log(getMinSquaredNumber([-777, 3, -2, 7, 9]));