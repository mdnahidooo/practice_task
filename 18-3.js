/**
 * Task-3:
Write a function to count the number of vowels in a string.
 * 
 */

function countVowels(str) {
    // console.log(str);

    let count = 0;
    for (let letter of str) {
        // console.log(letter);
        let l = letter.toLowerCase();
        if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u') {
            count++;
        }
    }
    return count;
}

const str = 'I am an innocent boy!';
const checkStr = countVowels(str);
console.log('The number of vowels is: ', checkStr);






//Alternative approaches:
// 1. Using includes():

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiou';
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

console.log(countVowels(''));              // 0 (empty string)
console.log(countVowels('bcdfg'));         // 0 (no vowels)
console.log(countVowels('AEIOU'));         // 5 (all uppercase)
console.log(countVowels('Hello World!'));  // 3
console.log(countVowels('a'));             // 1
console.log(countVowels('y'));             // 0 (y is not a vowel here)