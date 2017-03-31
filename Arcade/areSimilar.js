areSimilar = (A, B) => {
    'use strict'
    let count = 0;
    for (let i in A) {
        if (!B.includes(A[i])) { return false; }
        if (A[i] != B[i]) {
                count++;
        }
    }
    return (count < 3)
}
