export function caesarCipher(str, shift) {
    let result = '';

    for (let ch of str) {
        if (!isLetter(ch)) {
            result += ch;
            continue;
        }

        const lowercase = isLowerCase(ch);
        ch = ch.toLowerCase();
        ch = shiftLetter(ch, shift);

        if (!lowercase) {
            ch = ch.toUpperCase();
        }

        result += ch;
    }

    return result;
}

/**
 * Shift letter according to the shift factor.
 * shiftLetter('a', 2) => c
 * shiftLetter('b', 1) => c
 * shiftLetter('a', -1) => z
 * @param {string} letter - single alphabetical character
 */
function shiftLetter(letter, shift) {
    const ascii = letter.charCodeAt(0);

    shift %= 26;

    if (shift < 0) {
        shift = 26 + shift;
    }

    let newLetter = ascii + shift;

    if (newLetter > 122) {
        newLetter %= 123; // reduce to remove full loops
        newLetter += 97;
    }

    return String.fromCharCode(newLetter);
}

function isLetter(character) {
    return /[a-zA-Z]/.test(character);
}

function isLowerCase(letter) {
    if (letter === letter.toUpperCase()) {
        return false;
    } else {
        return true;
    }
}
