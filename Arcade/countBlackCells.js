countBlackCells = (n, m) => {
    'use strict'
    let gcd = (a, b) => !b ? a : gcd(b, a % b)
    return n + m + gcd(n,m) - 2
}

