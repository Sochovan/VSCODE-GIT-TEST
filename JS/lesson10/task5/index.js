const getTotalPrice = arr => {
    const sum = arr.reduce((acc, elem) => acc + elem);
    return Math.floor(sum * 100) / 100;
}