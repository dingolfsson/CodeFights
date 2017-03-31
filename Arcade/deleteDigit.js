deleteDigit = n => {
    'use strict'
    let max = 0,
        x = (''+n).split``,
        sum = "";

    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x.length; j++) {
            if (i != j) sum += x[j];
        }
        if (max < parseInt(sum)) max = parseInt(sum);
        sum = "";
    }
    return max;
}
