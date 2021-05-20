//put your code here

const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const increaseEvenEl = arr.filter(elem => elem % 2 === 0)
        .map(elem => elem + delta);
    return increaseEvenEl;

}