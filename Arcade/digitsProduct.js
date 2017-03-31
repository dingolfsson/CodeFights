digitsProduct = product => {
    'use strict'
    let answerDigits = []

    if (!product) { return 10; }
    if (product === 1) { return 1; }

    for (var divisor = 9; divisor > 1; divisor--) {
        while (product % divisor === 0) {
            product /= divisor;
            answerDigits.unshift(divisor);
        }
    }
    return product > 1 ?
            -1 :
            parseInt(answerDigits.join``)
}
