const books = ['math', 'bangla', 'english', 'physics', 'chemistry', 'biology'];

if (books.includes('javascript')) {
    console.log('Present, means found javascript book.');
}
else{
    console.log('Do not present the javascript book.!!!');
}


// code improvemnet using ternary methods

console.log(books.includes('javascript') ? 'Found javascript book!' : 'No javascript book found.');

// Alternative: Directly in console.log
console.log('Does the array contain a JavaScript book?', books.includes('JavaScript') ? 'Yes!' : 'No.');
