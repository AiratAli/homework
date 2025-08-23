function greet(name) {
    return `Hello "${name}"`;
}

console.log(greet("Anna"))

/*==============================*/

const numbers = [1, 3, 6, 8, 10, 20, 30, 40];

function printNumbersAboveTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i]);
        }
    }
}
printNumbersAboveTen(numbers);

/*===============================================*/

function calculator(num1, num2, operator) {
    switch (operator) {
        case 'plus':
        case '+':
            return num1 + num2;

        case 'minus':
        case '-':
            return num1 - num2;

        case 'multiply':
        case '*':
            return num1 * num2;

        case 'divide':
        case '/':
            return num1 / num2;
    }
}

const result1 = calculator(2, 3, 'plus');
console.log(result1);

const result2 = calculator(2, 3, 'minus');
console.log(result2);

const result3 = calculator(2, 3, 'multiply');
console.log(result3);

const result4 = calculator(2, 3, 'divide');
console.log(result4);