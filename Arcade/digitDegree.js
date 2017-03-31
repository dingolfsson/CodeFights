digitDegree = n => {
    'use strict'
    let a = n.toString(10).split``.map(Number);
    let sum = 0,
        count = 0;

    while (a.length != 1) {
        count++;
        sum = 0;
        for (let i in a) {
            sum+=a[i];
        }
        a = sum.toString(10).split``.map(Number);
    }
    return count;
}
