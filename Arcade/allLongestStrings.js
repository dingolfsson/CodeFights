allLongestStrings = inputArray => inputArray
    .filter(i => i
    .length == Math.max(...inputArray
    .map(x => x.length)));
