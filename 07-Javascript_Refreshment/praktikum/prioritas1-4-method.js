const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return 'Error: Division by zero';
        }
    }
};

// Contoh penggunaan:
console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));
console.log(calculator.multiply(7, 6));
console.log(calculator.divide(20, 4));
console.log(calculator.divide(20, 0));  
