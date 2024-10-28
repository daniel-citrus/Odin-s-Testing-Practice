export function reverseString(input) {
    if (input === undefined || input === null) {
        return '';
    }

    input = new String(input).toString();
    let reversed = '';

    for (let letter of input) {
        reversed = letter + reversed;
    }

    return reversed;
}
