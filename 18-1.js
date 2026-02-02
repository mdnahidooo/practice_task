/**
 * Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
 * 
 */
// My solution:

function celsiusToFahrenheit(celsius) {
    // console.log(celsius);
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
const temperature1 = celsiusToFahrenheit(103);
console.log('The fahrenheit temperature is: ', temperature1);



//-------------------------------------------------------------
// Alternative ways to write the same function:
// 1. With temperature unit in string:

// function celsiusToFahrenheit(celsius) {
//     const fahrenheit = (celsius * 9/5) + 32;
//     return `${celsius}°C = ${fahrenheit}°F`;
// }
// console.log(celsiusToFahrenheit(103));  // "103°C = 217.4°F"



// 2. Two-way conversion function:
function convertTemperature(value, from, to) {
    if (from === 'C' && to === 'F') {
        return (value * 9/5) + 32;
    } else if (from === 'F' && to === 'C') {
        return (value - 32) * 5/9;
    }
    return value;  // Same scale
}

console.log(convertTemperature(103, 'C', 'F'));  // 217.4
console.log(convertTemperature(212, 'F', 'C'));  // 100



// 3. Bonus: Fahrenheit to Celsius (reverse function):

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log(fahrenheitToCelsius(212));  // 100°C
console.log(fahrenheitToCelsius(32));   // 0°C