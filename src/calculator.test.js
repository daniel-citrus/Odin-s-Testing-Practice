import { calculator } from './calculator';

describe('calculator', () => {
    it('adds two values', () => {
        expect(calculator.add(2, 2)).toBe(4);
        expect(calculator.add(3, 4)).toBe(7);
        expect(calculator.add(4, -3)).toBe(1);
    });

    it('subtracts two values', () => {
        expect(calculator.subtract(4, -3)).toBe(7);
        expect(calculator.subtract(1, 2)).toBe(-1);
        expect(calculator.subtract(2, -3)).toBe(5);
        expect(calculator.subtract(4, 4)).toBe(0);
    });

    it('divides two values', () => {
        expect(calculator.divide(4, 0)).toBe(undefined);
        expect(calculator.divide(0, 4)).toBe(0);
        expect(calculator.divide(4, 2)).toBe(2);
        expect(calculator.divide(1, 2)).toBe(0.5);
        expect(calculator.divide(2, -2)).toBe(-1);
    });

    it('multiplies two values', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-4, 5)).toBe(-20);
        expect(calculator.multiply(-4, -8)).toBe(32);
        expect(calculator.multiply(4, 4)).toBe(16);
        expect(calculator.multiply(0, 4)).toBe(0);
    });
});
