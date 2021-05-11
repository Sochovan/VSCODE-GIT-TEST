//put your code here
function uniqueCount(arr) {
    let uniqueArray = [];
    for (let elem of arr) {
        if (!uniqueArray.includes(elem)) {
            uniqueArray.push(elem);
        }
    }
    return uniqueArray.length;
}
uniqueCount([1, 2, 1, 1, 6, 3, 7, 6, 7, 5]);