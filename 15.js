//Implementation one
function isEven(number) {
    return number % 2 === 0 ? true : false;
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false


//Implementation two
const isEven = (number) => (number % 2 === 0 ? true : false);

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

