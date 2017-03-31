isIPv4Address = inputString => {
    'use strict'
    let a = inputString.split('.');

    for (let i in a) {
        let x = a[+i];
        if (255 < x || x === '' || isNaN(x)) return false;
    }
    return a.length === 4;
}
