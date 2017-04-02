rounders = value => {
    'use strict'
    var a = (value+'').split``.map(Number),
        i = a.length,
        sum = "";
    while (1 < i) {
        if (5 <= a[i-1]) a[i-2]++
        a[i-1] = 0;
        i--;
    }
    for (let i in a) sum += (a[i]+'')
    return +sum
}
