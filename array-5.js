let fruits = ['apple', 'banana', 'orange'];
let scores = [85, 90, 78];

// let combinedArray = fruits.concat(scores);

// console.log(combinedArray);

console.log(fruits.concat(scores));



// ---------------*************---------------------
let morningRoutine = ['wake up', 'brush teeth'];
let dayRoutine = ['work', 'lunch'];
let eveningRoutine = ['dinner', 'sleep'];

let dailyRoutine = morningRoutine.concat(dayRoutine, eveningRoutine);
console.log("Daily Routine:", dailyRoutine);
// Output: ['wake up', 'brush teeth', 'work', 'lunch', 'dinner', 'sleep']


// ---------------*************---------------------
let empty1 = [];
let empty2 = [];
let result = empty1.concat(empty2);
console.log(result.length);


// ---------------*************---------------------
let arr = [1, 2];
let combined = arr.concat(3, 4); // Works!
console.log(combined); // [1, 2, 3, 4]

