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
 * Shift letter according to the shift value.
 * shiftLetter('a', 2) => c
 * shiftLetter('b', 1) => c
 * shiftLetter('a', -1) => z
 * @param {string} letter - single alphabetical character
 */
function shiftLetter(letter, shift) {
    const ascii = letter.charCodeAt(0);
    let shiftBy = ascii + shift;

    if (shiftBy > 122) {
        shiftBy = (shiftBy % 123) + 97;
    } else if (shiftBy < 97) {
    }

    console.log(`${letter} (${shiftBy})`);
    letter = String.fromCharCode(shiftBy);

    return letter;
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
