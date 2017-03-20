function allLongestStrings(inputArray) {
    var max = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (max < inputArray[i].length)
            max = inputArray[i].length;
    }
    return inputArray.filter(i => i.length == max);
}
