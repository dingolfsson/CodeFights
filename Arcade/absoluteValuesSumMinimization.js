// Simplified
// absoluteValuesSumMinimization = a => a[Math.ceil(a.length/2)-1]

absoluteValuesSumMinimization = a => {
    'use strict'
    if (a.length < 3) return Math.min(...a);

    let x = Infinity;
    let rtn;
    for (let i in a) {
        var sum = 0;

        for (let j in a) {
            sum += Math.abs(a[i] - a[j]);
        }
        if (sum < x) {
            x = sum;
            rtn = a[i];
        }
    }
    return rtn;
}
