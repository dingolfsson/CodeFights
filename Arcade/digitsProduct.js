function digitsProduct(product) {
    var answerDigits = []

    if (!product) {
        return 10;
    }
    if (product === 1) {
        return 1;
    }
    for (var divisor = 9; divisor > 1; divisor--) {
        while (product % divisor === 0) {
            product /= divisor;
            answerDigits.unshift(divisor);
        }
    }
    if (product > 1) {
        return -1;
    }

    return parseInt(answerDigits.join``);

}
