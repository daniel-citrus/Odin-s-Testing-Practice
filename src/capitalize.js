export function capitalize(input) {
    if (input === null || input === undefined) {
        return '';
    }

    input = new String(input).toString();

    // find the first letter
    // slice index 0 to first letter index
    // capitalize first letter
    // slice together the 2 strings

    for (let i = 0; i < input.length; i++) {
        if (/^[a-zA-Z]$/.test(input[i])) {
            return (
                input.slice(0, i) +
                input.charAt(i).toUpperCase() +
                input.slice(i + 1)
            );
        }
    }

    return input;
}
