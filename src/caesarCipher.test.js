import { caesarCipher } from './caesarCipher';

describe('caesar cipher encryption', () => {
    describe('ciphers strings', () => {
        it('(regular)', () => {
            expect(caesarCipher('', 0)).toBe('');
            expect(caesarCipher('', 4)).toBe('');
            expect(caesarCipher(' ', 0)).toBe(' ');
            expect(caesarCipher(' ', 99)).toBe(' ');
            expect(caesarCipher('Whitebeard', 4)).toBe('Almxifievh');
            expect(caesarCipher('Go Beyond', 6)).toBe('Mu Hkeutj');
        });

        it('with integers', () => {
            expect(caesarCipher('444', 8)).toBe('444');
            expect(caesarCipher('The 3 Musketeers', 2)).toBe(
                'Vjg 3 Owumgvggtu'
            );
            expect(caesarCipher('Cipher Pol 6', 3)).toBe('Flskhu Sro 6');
        });

        it('with symbols', () => {
            expect(caesarCipher('The One Piece is Real!', 4)).toBe(
                'Xli Sri Tmigi mw Viep!'
            );
            expect(caesarCipher('Plus Ultra!', 6)).toBe('Vray Arzxg!');
        });

        it('with integers and symbols ', () => {
            expect(caesarCipher('The are 96 holes on the wall!', 4)).toBe(
                'Xli evi 96 lspiw sr xli aepp!'
            );
            expect(caesarCipher('sdKijK[}56S!]', 7)).toBe('zkRpqR[}56Z!]');
        });

        it('without any letters', () => {
            expect(caesarCipher('9}8 [5548:8%84-(', 1)).toBe(
                '9}8 [5548:8%84-('
            );
        });

        it('with a negative shift factor', () => {
            expect(
                caesarCipher(`I'm gonna be the King of the Pirates!`, -2)
            ).toBe(`G'k emlly zc rfc Igle md rfc Ngpyrcq!`);
            expect(
                caesarCipher(`I'm gonna be the King of the Pirates!`, -53)
            ).toBe(`H'l fnmmz ad sgd Jhmf ne sgd Ohqzsdr!`);
            expect(caesarCipher('Go Beyond, Plus Ultra!', -4)).toBe(
                'Ck Xaukjz, Ljqo Qhpnw!'
            );
            expect(caesarCipher('Go Beyond, Plus Ultra!', -44)).toBe(
                'Ow Jmgwvl, Xtca Ctbzi!'
            );
        });
    });
});
