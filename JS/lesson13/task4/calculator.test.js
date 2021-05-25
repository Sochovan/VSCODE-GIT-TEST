import { calc } from './calculator.js';

it('+ working', () => {
    const result = calc('1 + 2');
    expect(result).toEqual('1 + 2 = 3');
});

it('- working', () => {
    const result = calc('5 - 2');
    expect(result).toEqual('5 - 2 = 3');
});

it('* working', () => {
    const result = calc('5 * 2');
    expect(result).toEqual('5 * 2 = 10');
});

it('/ working', () => {
    const result = calc('10 / 2');
    expect(result).toEqual('10 / 2 = 5');
});

it('should work due to conditions if input not a string', () => {
    const result = calc(+17);
    expect(result).toEqual(null);
});