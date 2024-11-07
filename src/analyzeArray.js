export function analyze(array) {
    array = cleanArray(array);

    return {
        average: getAverage(array),
        min: getMin(array),
        max: getMax(array),
        length: array.length,
    };
}

function cleanArray(array) {
    // eliminate null and undefined values
    array = array.filter((element) => {
        if (element === null || element === undefined || element === NaN) {
            return false;
        }

        return true;
    });

    // convert strings into integers
    array = array.map((element) => {
        return +element;
    });

    array = array.filter((element) => {
        if (element === NaN) {
            return false;
        }

        return true;
    });

    return array;
}

function getAverage(array) {
    if (!array.length) {
        return 0;
    }

    let sum = 0;

    for (let num of array) {
        sum += num;
    }

    return sum / array.length;
}

function getMin(array) {
    if (!array.length) {
        return null;
    }

    let min = Number.POSITIVE_INFINITY;

    for (let num of array) {
        if (min > num) {
            min = num;
        }
    }

    return min;
}

function getMax(array) {
    if (!array.length) {
        return null;
    }

    let max = Number.NEGATIVE_INFINITY;

    for (let num of array) {
        if (max < num) {
            max = num;
        }
    }

    return max;
}
