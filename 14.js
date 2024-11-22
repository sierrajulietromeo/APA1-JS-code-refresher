function processData(data) {
    // Arrow function to calculate the square of a number
    const square = (num) => num * num;

    const processedData = [];
    for (const item of data) {
        const squaredItem = square(item);
        processedData.push(squaredItem);
    }

    return processedData;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processData(numbers);
console.log(squaredNumbers); 