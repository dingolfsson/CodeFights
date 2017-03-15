function arrayMaxConsecutiveSum(inputArray, k) {
    var max = 0;
    var arrSum;
    for (var i = 0; i < inputArray.length - k + 1; i++) {
        arrSum = 0;
        for (var j = 0; j < k; j++) {
            arrSum += inputArray[j + i];
        }
        max = Math.max(max, arrSum);
    }
    return max;
}
