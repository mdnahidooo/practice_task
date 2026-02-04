/**
 * Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 * 
 */

function findLowestNumber(numbers) {
    // console.log(numbers);
    let min = numbers[0];
    for (const number of numbers) {
        // console.log(number)
        if (number < min) {
            min = number;
        }
    }
    return min;
}

const heights2 = [167, 190, 120, 165, 137];
const lowestNumber = findLowestNumber(heights2);
console.log('The lowest number is: ', lowestNumber);




// Alternative approaches:

// 1. Using Math.min() with spread operator:
function findLowestNumber(numbers) {
    return Math.min(...numbers);
}
console.log(findLowestNumber([5, 2, 8, 1, 9]));    // 1
console.log(findLowestNumber([-5, -2, -8, -1]));   // -8
console.log(findLowestNumber([100]));              // 100 (single element)
console.log(findLowestNumber([]));                 // undefined (empty array)



// 2. Improvement for empty arrays:
function findLowestNumber(numbers) {
    if (numbers.length === 0) {
        return "Array is empty";
    }
    
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(findLowestNumber([5, 2, 8, 1, 9]));    // 1
console.log(findLowestNumber([-5, -2, -8, -1]));   // -8
console.log(findLowestNumber([100]));              // 100 (single element)
console.log(findLowestNumber([]));                 // undefined (empty array)



// 3. Bonus challenge:
function findMinMax(numbers) {
    if (numbers.length === 0) return { min: null, max: null };
    
    let min = numbers[0];
    let max = numbers[0];
    
    for (const num of numbers) {
        if (num < min) min = num;
        if (num > max) max = num;
    }
    
    return { min, max };
}

console.log(findMinMax([167, 190, 120, 165, 137]));
// Output: { min: 120, max: 190 }

const heights3 = [167, 190, 120, 165, 137];
const minMax = findMinMax(heights3);
console.log('The lowest number is: ', minMax);