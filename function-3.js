/**
 * Task-3:
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 * 
 */


// My solution
// function make_avg(numbers) {
//     console.log(numbers);
    
//     let sum = 0;
//     for (const number of numbers) {
//         console.log(number);
//         sum = sum + number;
//     }
//     let size = numbers.length;
//     let avg = sum / size;
//     return avg;
// }
// const numbs = [5, 7, 10, 2, 75];
// const averageMark = make_avg(numbs);
// console.log('Average mark of number is: ', averageMark);




//---------------------------------------------------------
// Even cleaner version (using the size parameter from the task):
// The task said: "take an array of integers and the size of that array"

function make_avg(numbers, size) {
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum = sum + numbers[i];
    }
    return sum / size;
}

const numbs = [5, 7, 10, 2, 75];
const averageMark = make_avg(numbs, numbs.length);
console.log('Average mark is:', averageMark);  


