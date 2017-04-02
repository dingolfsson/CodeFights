magicalWell = (a, b, n) => {
    'use strict'
    if (n == 0) return 0
    return (n == 1 ? a*b : a*b + magicalWell(a+1, b+1, n-1))
}
