increaseNumberRoundness = n => {
    'use strict'
    var n = (''+n).split``,
        count = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] === '0') count++
        if (n[i] !== '0' && count !== 0) return true
    }
    return false;
}
