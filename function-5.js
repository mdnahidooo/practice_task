/**
 * Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 * 
 */

// My solution:
function odd_even(number) {
    // console.log(number);
    if (number % 2 === 0) {
        return 'Even';
    }
    else {
        return 'Odd';
    }
}

console.log(odd_even(115));
console.log(odd_even(8));



//------------------------------------------------
// Alternative ways to write the same function:
// 1. Using ternary operator (shorter):
function odd_even(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(odd_even(0));      // Even (0 ÷ 2 = 0 remainder)
console.log(odd_even(-4));     // Even
console.log(odd_even(-7));     // Odd




// 2. Arrow function (modern): New for me
const odd_Even = number => number % 2 === 0 ? 'Even' : 'Odd';

console.log(odd_Even(1));      // Odd
console.log(odd_Even(1000));   // Even