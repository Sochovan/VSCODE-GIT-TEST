import { withdraw } from './withdraw';

it('should have the right name', () => {
    const result = withdraw([clients, balances, client, amount]);
    expect(result).toEqual([clients, balances, client, amount]);
})

it('should withdraw amount if enough money', () => {
    const result = withdraw(['Ann', 'John'], [87, -6], 'Ann', 50);
    expect(result).toEqual([37, -6]);
})

it('should not withdraw money if amount > balance', () => {
    const result = withdraw(['Ann', 'John'], [30, -6], 'Ann', 50);
    expect(result).toEqual([30, -6]);
})