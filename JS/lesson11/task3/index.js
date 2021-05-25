const splitString = (str, num = 10) => {
    if (typeof str !== 'string') {
        return null;
    }
    let resArray = [];
    let startPosition = 0;


    for (let i = 0; i < str.length; i++) {
        const chunk = str.substr(startPosition, num);
        if (chunk.length === num) {
            resArray.push(chunk);
            startPosition += num;
        }
        if (chunk.length < num) {

            resArray.push(chunk + '.'.repeat(num - chunk.length))
            break;
        }
    }

    return resArray;
}


console.log(splitString('ewjRFGLYFGLBWEREdwdAWGTTHDFddfsds', 7));

// 'text '.repeat(2); // 'text text ';

const splitString = (str, len = 10) => {
    if (typeof str !== 'string') {
        return null;
    }
    const arr = [];
    let startPosition = 0;
    while (true) {
        let chunk = str.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
        }
        arr.push(chunk);
        startPosition += len;
    }
    if (arr[arr.length - 1].length !== len) {
        arr[arr.length - 1] = arr[arr.length - 1].padEnd(len, '.');
    }
    return arr;
};