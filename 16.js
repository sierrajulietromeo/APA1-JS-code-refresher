// Object literal notation
const person1 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30
};

console.log(person1.firstName); // Output: Alice - dot notation
console.log(person1["firstName"]); // Output: Alice - bracket notation

console.log(person1.age); // Output: 30 - dot notation
console.log(person1["age"]); // Output: 30 - bracket notation

// Why use bracket notation?
// Allows you to use a variable or an expression to access properties dynamically.

const propertyName = "firstName";
console.log(person1[propertyName]); // Output: Alice

person1.shoeSize = 7;

