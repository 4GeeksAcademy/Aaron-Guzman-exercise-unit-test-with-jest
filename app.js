

// let oneEuroIs = {
//     "JPY": 127.9, // japan yen
//     "USD": 1.2, // us dollar
//     "GBP": 0.8, // british pound
// }

// let fromDollarToYen = (usd) => {
//     return (usd/oneEuroIs.USD) * oneEuroIs.JPY;
// }

// let fromEuroToDollar = (eur) => {
//     return (eur * 1.2);
// }

// let fromYenToPuond = (yen) => {
//     return (yen )
// }
// console.log(fromDollarToYen(3.5))
// console.log(oneEuroIs.USD);

// let oneEuroIs = {
//     "JPY": 127.9, // japan yen
//     "USD": 1.2,  // us dollar
//     "GBP": 0.8,  // british pound
// }

// let fromDollarToYen = (usd) => {
//     return (usd / oneEuroIs.USD) * oneEuroIs.JPY;
// }

// let fromEuroToDollar = (eur) => {
//     return eur * oneEuroIs.USD; // Utiliza la tasa de cambio proporcionada
// }

// let fromYenToPound = (yen) => {
//     return (yen / oneEuroIs.JPY) * oneEuroIs.GBP; // Utiliza la tasa de cambio proporcionada
// }

// // declaramos una funcion con el mismo nombre "formEuroToDollar"
// const fromEuroToDollar = function(valueInEuro){
//     // convertimos el valor a dolares
//     let valueInDollar = valueInEuro * 1.2;
//     // retornamos el valor
//     return valueInDollar;
// }



// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromDollarToYen = function(valueInDollar){
    let yen = (valueInDollar/1.2) * 127.9;
    return yen;
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let dollar = valueInEuro * 1.2;
    // retornamos el valor
    return dollar;
}

const fromYenToPuond = function(valueInYen){
    let pound = (valueInYen/127.9) * 0.8;
    return pound;
}

module.exports = {
    fromDollarToYen,
 fromEuroToDollar,
    fromYenToPuond
}