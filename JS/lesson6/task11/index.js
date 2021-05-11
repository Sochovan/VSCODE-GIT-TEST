//put your code here
function checker(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let a = Math.min(...arr);
    let b = Math.max(...arr);
    if (a + b > 1000) {
        return true;
    } else {
        return false;
    }
}