//put your code here
const superRound = (num, length) => {
    const floor = Math.floor(num * 10 ** length) / 10 ** length;
    const round = Math.round(num * 10 ** length) / 10 ** length;
    const ceil = Math.ceil(num * 10 ** length) / 10 ** length;
    const trunc = Math.trunc(num * 10 ** length) / 10 ** length;
    const fixed = +num.toFixed(length);

    return [floor, round, ceil, trunc, fixed];
}