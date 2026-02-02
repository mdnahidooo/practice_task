let books = ['math', 'bangla', 'english', 'physics', 'chemistry', 'biology'];

let nums = [];

let cgpa = 3.25;

let different = '[]';


console.log(Array.isArray(books));
console.log(Array.isArray(nums));
console.log(Array.isArray(cgpa));
console.log(Array.isArray(different));

// if (Array.isArray(cgpa)) {
//     console.log('variable is an array.')
// }

// else {
//     console.log('Not!!!')
// }



// Same variables as above
let fruits = ['apple', 'banana', 'orange'];
let age = 25;
let name = "John Doe";
let isStudent = true;
let scores = [85, 90, 78];

// Check and print with descriptive messages
console.log(`fruits (${fruits}): ${Array.isArray(fruits) ? 'IS an array' : 'IS NOT an array'}`);
console.log(`age (${age}): ${Array.isArray(age) ? 'IS an array' : 'IS NOT an array'}`);
console.log(`name (${name}): ${Array.isArray(name) ? 'IS an array' : 'IS NOT an array'}`);
console.log(`isStudent (${isStudent}): ${Array.isArray(isStudent) ? 'IS an array' : 'IS NOT an array'}`);
console.log(`scores (${scores}): ${Array.isArray(scores) ? 'IS an array' : 'IS NOT an array'}`);

