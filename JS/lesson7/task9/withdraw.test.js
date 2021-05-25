import { withdraw } from './withdraw';

it('should have the right name', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
    expect(result).toEqual(-1, [1400, 87, -6]);
})

it('should withdraw amount if enough money', () => {
    const result = withdraw(['Ann', 'John'], [87, -6], 'Ann', 50);
    expect(result).toEqual(37);
})

it('should not withdraw money if amount > balance', () => {
    const result = withdraw(['Ann', 'John'], [30, -6], 'Ann', 50);
    expect(result).toEqual(-1, [30, -6]);
})