import { capitalize } from './capitalize';

describe('capitalize first letter of an input', () => {
    it('capitalizes the first letter of input', () => {
        expect(capitalize('daniel')).toBe('Daniel');
        expect(capitalize('citrus')).toBe('Citrus');
    });
    it('capitalizes the first letter of a string that contains numbers', () => {
        expect(capitalize('4citrus4')).toBe('4Citrus4');
        expect(capitalize('444citrus4')).toBe('444Citrus4');
        expect(capitalize('444c4444')).toBe('444C444');
    });
    it('accepts integers and returns strings', () => {
        expect(capitalize(1234)).toBe('1234');
        expect(capitalize(4444)).toBe('4444');
    });
    it('returns an empty string if input is null or undefined', () => {
        expect(capitalize(null)).toBe('');
        expect(capitalize(undefined)).toBe('');
        expect(capitalize(false)).toBe('False');
        expect(capitalize(0)).toBe('0');
    });
});
