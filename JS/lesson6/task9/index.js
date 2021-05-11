// put your code here
function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let reverseArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArray.push(arr[i])
    }
    return reverseArray;
}