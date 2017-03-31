'use strict'
almostIncreasingSequence = a => {
    var x = 0,
        i = 1;

    while (i < a.length) {
        if (!(a[i-1] < a[i])) { x++; }
        if (a[i - 2] >= a[i]) { x++; }
        i++;
    }
    return x < 3
}
