//put your code here

const reverseArray = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const reverseArray = arr.slice().reverse();
    return reverseArray;
}