function doSomethingRisky(value) {
    try {
        if (typeof value !== 'string' || value === null || value === undefined || value.trim() === '') {
            throw new Error("Invalid input: Value must be a non-empty string.");
        }
        return value.toUpperCase();
    } catch (error) {
        console.error("An error occurred:", error.message);
        return null; // Example: Returning null in case of an error
    }
}

const result1 = doSomethingRisky(null);
console.log(result1); // Output: null

const result2 = doSomethingRisky("hello");
console.log(result2); // Output: ?????