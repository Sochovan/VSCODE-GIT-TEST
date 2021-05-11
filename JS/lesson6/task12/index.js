function sortAsc(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
};

function sortDesc(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.log(sortDesc([5, 2, 1, 4]));
// console.log(smallTobig([999, 5, 0, 1, 4, 998]));
// console.log(smallTobig([15, 32, 11, 14]));
// console.log(smallTobig([5, 4, 3, 2, 1, 0]));
// console.log(smallTobig([123, 321, 143, 313]));