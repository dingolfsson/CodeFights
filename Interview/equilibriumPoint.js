s0 = s1 = 0
equilibriumPoint = a => {
    'use strict'
    s1 = a.reduce((x,y) => x+y)
    if (a.length === 1) return 1;
    for (let i in a) {
        s0 += a[i]
        if (s0 === s1) return +i+1
        s1 -= a[i]
    }
    return -1
}
