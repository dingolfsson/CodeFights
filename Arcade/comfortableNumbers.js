comfortableNumbers = (L, R) => {
    'use strict'
    var result = 0;
    for (let a = L; a < R; a++) {
        for (let b = a + 1; b <= R; b++) {
            if (isComfortable(a, b) && isComfortable(b, a)) {
                result++;
            }
        }
    }
    return result;
}

isComfortable = (a, b) => {
    'use strict'
    var sum = 0;
    for (let x = a; x != 0; x = x / 10 | 0) {
        sum += x % 10;
    }
    return b >= a - sum && b <= a + sum;
}