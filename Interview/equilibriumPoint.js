sum1 = sum2 = 0
equilibriumPoint = a => {
    'use strict'
    if (a.length === 1) return 1;
    for (let i in a) {
        sum2 += a[i]
    }
    for (let i in a) {
        sum1 += a[i]
        if (sum1 === sum2) return +i+1
        sum2 -= a[i]
    }
    return -1
}
