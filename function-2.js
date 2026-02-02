/**
 * Task-2: Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 * 
 */
// My solution:
function oddEven(number) {
    if (number % 2 === 1) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number / 2;
        return result;
    }
}

const oddOutput = oddEven(5);
console.log(oddOutput);

const evenOutput = oddEven(100);
console.log(evenOutput);



//----------------------------------------------------------------------
// Small improvements you could make:
// 1. Shorter version (same logic):
function oddEven(number) {
    if (number % 2 === 1) {
        return number * 2;  // Direct return
    }
    return number / 2;      // No else needed
}
console.log(oddEven(7));    // 14 (odd: 7×2)
console.log(oddEven(8));    // 4 (even: 8÷2)



// 2. Using ternary operator:
function oddEven(number) {
    return number % 2 === 1 ? number * 2 : number / 2;
}
console.log(oddEven(1));    // 2 (odd: 1×2)
console.log(oddEven(2));    // 1 (even: 2÷2)



//Handle edge cases (negative numbers, zero):
function oddEven(number) {
    if (number % 2 === 1 || number % 2 === -1) {   // Handle negative odd
        return number * 2;
    }
    return number / 2;
}
console.log(oddEven(-50));   // -10 (negative odd)
console.log(oddEven(-40));   // -2 (negative even)
console.log(oddEven(0));    // 0 (0 ÷ 2 = 0)




/**
 * 
 * One important note about your condition:
Your condition number % 2 === 1 works perfectly for positive odd numbers, but for negative odd numbers:

-5 % 2 === -1 (not 1)

-5 % 2 === 1 would be false even though -5 is odd

 * 
 */

// Better practice: Check if remainder is not zero:
function oddEven(number) {
    if (number % 2 !== 0) {  // Works for both positive and negative odds
        return number * 2;
    }
    return number / 2;
}
console.log(oddEven(-5));   // -10 (negative odd)
console.log(oddEven(-4));   // -2 (negative even)