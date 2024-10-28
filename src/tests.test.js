import { capitalize } from './capitalize';

/* describe('capitalize first letter of an input', () => {
    it('capitalizes the first letter of input', () => {
        expect(capitalize('daniel')).toBe('Daniel');
        expect(capitalize('citrus')).toBe('Citrus');
        expect(capitalize('CITRUS')).toBe('CITRUS');
    });
    it('capitalizes the first letter of a string that contains numbers', () => {
        expect(capitalize('4citrus4')).toBe('4Citrus4');
        expect(capitalize('4CITRUS4')).toBe('4CITRUS4');
        expect(capitalize('444citrus4')).toBe('444Citrus4');
        expect(capitalize('44c444c4')).toBe('44C444c4');
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
}); */

import { reverseString } from './reverseString';

describe('reverse a string', () => {
    it('ignore invalid inputs', () => {
        expect(reverseString(undefined)).toBe('');
        expect(reverseString(null)).toBe('');
    });
    describe('reverses', () => {
        it('regular strings', () => {
            expect(reverseString('Daniel')).toBe('leinaD');
            expect(reverseString('Whitebeard')).toBe('draebetihW');
        });
        it('strings with spaces', () => {
            expect(reverseString('Dan iel')).toBe('lei naD');
            expect(reverseString('on EpeAce')).toBe('ecAepE no');
        });
        it('empty strings', () => {
            expect(reverseString('')).toBe('');
            expect(reverseString(' ')).toBe(' ');
        });
        it('strings with numbers', () => {
            expect(reverseString('Cer0')).toBe('0reC');
            expect(reverseString('A11 Might')).toBe('thgiM 11A');
        });
        it('input type integer', () => {
            expect(reverseString(1234)).toBe('4321');
            expect(reverseString(410)).toBe('014');
            expect(reverseString(-444)).toBe('444-');
        });
    });
});
