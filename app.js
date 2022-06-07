// const sum = (a,b) => {
//     return a + b
// }

// // just a console log for ourselves.
// console.log(sum(7,3))

// // export the function to be used on other files 
// // (similar to the keyword `export` when using webpack)
// module.exports = { sum };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function eurosToDollars(amountInEuros){
    let amountInDollars = amountInEuros * 1.2
    return amountInDollars
    
}

function dollarsToEuros(amountInDollars){
    let amountInEuros = amountInDollars / 1.2
    // return `You give me ${amountInEuros} Euros and I give you ${amountInDollars} Dollars`
    return amountInEuros
}

function fromDollarToYen(amountInDollars){
    let amountInYen = Math.floor((dollarsToEuros(amountInDollars))* 127.9)
    // return `You give me ${amountInDollars} Dollars and I give you ${amountInYen} Yen`
    return amountInYen
}

function yenToEuro(amountInYen){
    let amountInEuros = amountInYen / 127.9
    return amountInEuros
}

function fromYenToPound(amountInYen){
    let amountInPounds = yenToEuro(amountInYen) * 0.8
    return amountInPounds
}

console.log(eurosToDollars(10))
console.log(dollarsToEuros(10))
console.log(fromDollarToYen(10))
console.log(fromYenToPound(127.9))

module.exports = { fromDollarToYen, fromYenToPound, eurosToDollars};
