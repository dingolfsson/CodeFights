firstReverseTry = (a) => {
    'use strict'
    let l = a.length-1;
    if (l < 1) return a
    return swap(a, 0, l)
}

swap = (a, x, y) => {
    a.splice(y, 1, a.splice(x, 1, a[y])[0]);
    return a;
}