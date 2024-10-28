function Calculator() {}

Calculator.prototype.add = (x, y) => x + y;

Calculator.prototype.subtract = (x, y) => x - y;

Calculator.prototype.divide = (x, y) => {
    if (y === 0) {
        return undefined;
    }

    return x / y;
};

Calculator.prototype.multiply = (x, y) => x * y;

export const calculator = new Calculator();
