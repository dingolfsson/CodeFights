function arrayChange(inputArray) {
    var count = 0;

    for (var i = 1; i < inputArray.length; i++) {
        while (inputArray[i] <= inputArray[i-1]) {
            inputArray[i]++;
            count++;
        }
    }
    return count;
}
