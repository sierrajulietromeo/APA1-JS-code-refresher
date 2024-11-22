// Function Declaration
function add(a, b) {
    return a + b;
}

// Function Expression
const subtract = function (a, b) {
    return a - b;
};

// Arrow Function (concise)
const multiply = (a, b) => a * b;

// Arrow Function (with block body)
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
};

console.log(add(5, 3));      // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(multiply(5, 3)); // Output: 15
console.log(divide(5, 3));   // Output: 1.6666666666666667
console.log(divide(5, 0));   // Output: Cannot divide by zero!