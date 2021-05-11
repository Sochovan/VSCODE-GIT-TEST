const increaseEvenEl = (arr, delta) => {

    //put your code here
    if (!Array.isArray(arr)) {
        return null;
    }
    let arrDelta = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arrDelta.push(arr[i] + delta);
        }
    }
    return arrDelta;

}