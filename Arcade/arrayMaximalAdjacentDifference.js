function arrayMaximalAdjacentDifference(inputArray) {
    return Math.max(...inputArray.slice(1).map((x, i) => Math.abs(x-inputArray[i])));
}
