function differentSquares(matrix) {
    var m = matrix.length,
        n = matrix[0].length;

    if (m == 1 || n == 1) return 0;
    if (m == 2 || n == 2) return 1;

    var tmp = [],
        tmp2 = [],
        total = [],
        final = [];

    for (var i = 0; i < m-1 ; i++) {

        for (var j = 0; j < n-1; j++) {
            tmp.push((matrix[i].slice(j, j+2)) + matrix[i+1].slice(j, j+2));
        }
        total.push(tmp);
        tmp = [];
    }

    for (var i = 0; i < total.length; i++) {
        for (var j = 0; j < total[0].length; j++) {
            if (!final.includes(total[i][j]))
                final.push(total[i][j]);
        }
    }
    return (final.length);
}
