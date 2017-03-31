'use strict'
adjacentElementsProduct = (inputArray) =>
    Math.max(...inputArray.map((_, i, a) =>
                               i !== 0 ? a[i-1] * a[i] : -Infinity ))
