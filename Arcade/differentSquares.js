differentSquares = matrix => {
    'use strict'
    let m = matrix.length,
        n = matrix[0].length;

    if (m == 1 || n == 1) return 0;
    if (m == 2 || n == 2) return 1;

    let tmp = [],
        total = [],
        final = [];

    for (let i = 0; i < m-1 ; i++) {

        for (let j = 0; j < n-1; j++) {
            tmp.push((matrix[i]
                     .slice(j, j+2)) + matrix[i+1]
                     .slice(j, j+2));
        }
        total.push(tmp);
        tmp = [];
    }

    for (let i = 0; i < total.length; i++) {
        for (let j = 0; j < total[0].length; j++) {
            if (!final.includes(total[i][j]))
                final.push(total[i][j]);
        }
    }
    return (final.length);
}
