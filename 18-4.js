/**
 * Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 * 
 */

// function findLongestWord(str) {
//     const wordsArray = str.trim().split(' ');
//     // console.log(wordsArray);
    
//     let longestWord = '';
//     let maxLength = 0;
//     for (const word of wordsArray) {
//         // console.log(word);
        
//         if (word.length > maxLength) {
//             maxLength = word.length;
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// // const str1 = 'I have a plan';
// const str1 = 'I am learning Programming to become a programmer';
// const longestWord = findLongestWord(str1);
// console.log('Longest word will be: ', longestWord);






//better solution:

function findLongestWord(str) {
    const wordsArray = str.trim().split(' ');
    // console.log(wordsArray);
    
    let longestWords = [];
    let maxLength = 0;
    for (const word of wordsArray) {
        
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWords = [word];
        }
        else if (word.length === maxLength) {
            longestWords.push(word);
        }
    }
    return longestWords;
}

const str1 = 'I have a plan for me';
// const str1 = 'I am learning Programming to become a programmer';
const longestWord = findLongestWord(str1);
console.log('Longest word will be: ', longestWord);