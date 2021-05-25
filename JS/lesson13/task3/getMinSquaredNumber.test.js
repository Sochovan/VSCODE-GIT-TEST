import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should get null if array is empty', () => {
    const result = getMinSquaredNumber([]);
    expect(result).toEqual(null);
});

it('if input = string', () => {
    const result = getMinSquaredNumber('ahy');
    expect(result).toEqual(undefined);
});

it('if input = string', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 9]);
    expect(result).toEqual(4);
});