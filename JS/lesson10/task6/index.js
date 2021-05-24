function getRandomNumbers(length, from, to) {
    if ((to - from) < 1) {
        return null;
    }
    let arr = [];
    from = Math.ceil(from);
    to = Math.floor(to);

    while (arr.length < length) {
        arr.push(Math.floor(Math.random() * (from - to) + to));
    }
    return arr;
}

console.log(getRandomNumbers(4, 1, 1.9));