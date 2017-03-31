isLucky = n => {
    'use strict'
    let x = (''+n).split``,
        s = 0;
    while (x.length) {
        s += +x.pop()
        s -= +x.shift()
    }
    return !s
}
