/**
 * 
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 * 
 */

function countRepeatedNumber(numbers, find) {
    // console.log(numbers, find);

    let count = 0;
    for (const number of numbers) {
        if (number === find) {
            count++;
        }
    }
    return count;
}
// const numbers = [5, 6, 11, 12, 98, 5];
// const find = 5;
// const countedNumbers = countRepeatedNumber(numbers, find);
// console.log(countedNumbers);

const numbers = [5, 6, 11, 12, 98, 5];
const find = 25;
const countedNumbers = countRepeatedNumber(numbers, find);
console.log(countedNumbers);


//---------------------------------------------------------
// Alternative approaches:
// 1. Using for loop (traditional):

function countRepeatedNumber(numbers, find) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === find) count++;
    }
    return count;
}

// Empty array
console.log(countRepeatedNumber([], 5));        // 0

// All same numbers
console.log(countRepeatedNumber([5,5,5,5], 5)); // 4

// No matches
console.log(countRepeatedNumber([1,2,3], 5));   // 0

// With decimal numbers
console.log(countRepeatedNumber([1.5, 2.5, 1.5], 1.5)); // 2

// With negative numbers
console.log(countRepeatedNumber([-1, -2, -1, 3], -1));  // 2

