palindromeRearranging = inputString => {
    'use strict'
    let a = inputString.split("").sort(),
        e = 0;

    while (a.length) {
        let del = a.shift();
        if (a[0] === del) {
            a.shift();
        } else {
            e++;
        }
    }
    return e < 2;
}
