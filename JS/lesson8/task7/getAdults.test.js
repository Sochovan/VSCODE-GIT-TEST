import { getAdults } from './getAdults';

it('should return age 18+', () => {
    const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
    expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
})
it('should return empty {} for input {}', () => {
    const result = getAdults({});
    expect(result).toEqual({});
})

it('should return empty {} for input {}', () => {
    const result = getAdults(({ Ann: 56, Andrey: 7 }));
    expect(result).not.toEqual({ Andrey: 7 });
})