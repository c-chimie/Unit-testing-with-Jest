// import the function sum from the app.js file
// const { sum } = require('./app.js');

// start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });

module.exports = { fromDollarToYen } = require('./app.js');

test('turns 10 dollars to 1065 yen', () => {
    //inside the test we call our sum function with 2 numbers
    let total = fromDollarToYen(10);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(1065);
});

module.exports = { fromYenToPound } = require('./app.js');
test('turns 127.9 yen to 0.8 pounds', () => {
    //inside the test we call our sum function with 2 numbers
    let total = fromYenToPound(127.9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(0.8);
});

module.exports = { eurosToDollars } = require('./app.js');
test('turns 10 euros to 12 dollars', () => {
    //inside the test we call our sum function with 2 numbers
    let total = eurosToDollars(10);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(12);
});






