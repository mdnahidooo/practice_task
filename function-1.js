/**
 * Task-1:Take four parameters. Multiply the four numbers and then return the result.
 * 
 */
// My solution:
function multiply(number1, number2, number3, number4) {
    const result = number1 * number2 * number3 * number4;
    return result;
}

const multiplyOutput = multiply(5, 2, 10, 100);
console.log(multiplyOutput);





//Small improvements you could make (optional):
// 1. Using fewer variables:
function multiply(number1, number2, number3, number4) {
    return number1 * number2 * number3 * number4;
}
// Directly console.log without storing in variable
console.log(multiply(5, 2, 10, 100));  // 10000




// 2. Parameter validation (for learning):
function multiply(number1, number2, number3, number4) {
    // Check if all parameters are numbers
    if (typeof number1 !== 'number' || typeof number2 !== 'number' || 
        typeof number3 !== 'number' || typeof number4 !== 'number') {
        return 'Error: All parameters must be numbers';
    }
    return number1 * number2 * number3 * number4;
}




// 3. For any number of parameters (using rest parameter):(Interesting solutions)
function multiply(...numbers) {
    let result = 1;
    for (let num of numbers) {
        result *= num;  // Multiply each number
    }
    return result;
}

console.log(multiply(5, 2, 10, 100));      // 10000
console.log(multiply(2, 3, 4));            // 24
console.log(multiply(1, 2, 3, 4, 5, 6));   // 720

// Edge cases to try:
console.log(multiply(0, 5, 10, 2));    // 0 (anything × 0 = 0)
console.log(multiply(1, 1, 1, 1));     // 1
console.log(multiply(-2, 3, -4, 5));   // 120 (negative numbers)