import { reverseArray } from './reverse';

it('if input is string', () => {
    const result = reverseArray('1 + 2');
    expect(result).toEqual(null);
});

it('should get the reverse array', () => {
    const result = reverseArray([1, 7, 3, 'fdf']);
    expect(result).toEqual(['fdf', 3, 7, 1]);
});

it('should get the empty array', () => {
    const result = reverseArray([]);
    expect(result).toEqual([]);
});