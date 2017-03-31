'use strict'
matrixElementsSum = matrix => {
    var sum = 0;

    for (i = 1; i < matrix.length; i++) {
        for (j = 0; j < matrix[0].length; j++) {
            if (matrix[i-1][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[0].length; j++) {
            sum += matrix[i][j];
        }
    }

    return sum;
}
