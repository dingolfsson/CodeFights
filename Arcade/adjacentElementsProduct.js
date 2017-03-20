function adjacentElementsProduct(inputArray) {
    var max = -Infinity;
    var i = 1;
    while (i < inputArray.length) {
        if (inputArray[i-1] * inputArray[i] > max)
            max = inputArray[i-1] * inputArray[i];
        i++;
    }
    return max;
}
