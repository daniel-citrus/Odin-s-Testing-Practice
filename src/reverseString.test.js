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
