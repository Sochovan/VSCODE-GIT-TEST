const getSubArray = (arr, numberOfElements) => {
    // put your code here
    let array = [];
    for (let i = 0; i <= numberOfElements - 1; i++) {
        array.push(arr[i]);
    }
    return array;
};

getSubArray([1, 6, 8, 3], 2);