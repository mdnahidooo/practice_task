/**
 * Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 * 
 */

function count_zero(binaryStr) {
    console.log(binaryStr);

    let count = 0;
    for (let i = 0; i < binaryStr.length; i++){
        if (binaryStr[i] === '0') {
            count++;
        }
    }
    return count;
}

const numberOfZeros = count_zero('001111001101');
console.log("The number of zeros are: ", numberOfZeros)



//-----------------------------------------------------------
// Alternative approaches you could also use:

// 1. Using for...of loop:
function count_zero(binaryStr) {
    let count = 0;
    for (let char of binaryStr) {
        if (char === '0') count++;
    }
    return count;
}
console.log(count_zero('111111'));    // 0 (no zeros)
console.log(count_zero('000000'));    // 6 (all zeros)
console.log(count_zero('101010'));    // 3 (alternating)



// 2. Using array methods:(ignore apatoto)
function count_zero(binaryStr) {
    return binaryStr.split('').filter(char => char === '0').length;
}
console.log(count_zero('101010'));    // 3 (alternating)
console.log(count_zero(''));          // 0 (empty string)
console.log(count_zero('0'));         // 1 (single zero)
console.log(count_zero('1'));         // 0 (single one)


