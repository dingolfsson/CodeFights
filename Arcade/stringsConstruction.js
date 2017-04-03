'use strict'
stringsConstruction = (A, B) => {
    var k = B.length
    while(k != 0) {
        for (c in A) {
            if (B.indexOf(A[c]) != -1) {
                Array.prototype.map.call(A, i =>
                    B = B.replace(i, "-")) 
            } else {
                return (B.indexOf("-") == -1 ?
                    0 : Math.floor(B.match(/\-/g).length / A.length));
            }
        }
        k--;
    }
    return (Math.floor(B.match(/\-/g).length / A.length));
}
