//put your code here

function checkSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sumArr = 0;
    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
    }
    if (sumArr > 100) {
        return true;
    } else {
        return false;
    }
}