/**
 * Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 * 
 */

// My solution:

function calculateElectronicsBudget(laptopQuantity, tabletsQuantity, mobileQuantity) {
    let laptop = 35000;
    let tablet = 15000;
    let mobile = 20000;

    let totalLaptopCost = laptop * laptopQuantity;
    let totalTabletCost = tablet * tabletsQuantity;
    let totalMobileCost = mobile * mobileQuantity;

    let totalBudget = totalLaptopCost + totalTabletCost + totalMobileCost;

    return totalBudget;
}

const budget = calculateElectronicsBudget(3, 5, 2);
console.log('Total budget: ', budget);





// Alternative approaches:

// 1. More concise version:
function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
    return (laptopQty * 35000) + (tabletQty * 15000) + (mobileQty * 20000);
}

console.log(calculateElectronicsBudget(3, 5, 2));  // 220000 ✓
console.log(calculateElectronicsBudget(0, 0, 0));  // 0 ✓

// 2. Using object for prices:
function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
    const prices = {
        laptop: 35000,
        tablet: 15000,
        mobile: 20000
    };
    
    return (laptopQty * prices.laptop) + 
           (tabletQty * prices.tablet) + 
           (mobileQty * prices.mobile);
}

console.log(calculateElectronicsBudget(1, 1, 1));  // 70000 ✓



// 3. With currency formatting:(Something New)
// function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
//     const total = (laptopQty * 35000) + (tabletQty * 15000) + (mobileQty * 20000);
//     return total.toLocaleString('en-BD') + ' tk';
// }

// console.log(calculateElectronicsBudget(3, 5, 2));  // "220,000 tk"
