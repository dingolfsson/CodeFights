replaceMiddle = a => {
    'use strict'
    let l = a.length
    if (l % 2 === 1) return a
    return a.slice(0,l/2 - 1).concat(a[l/2]+a[l/2 - 1]).concat(a.slice(l/2+1))
}
