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