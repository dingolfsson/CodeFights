function longestDigitsPrefix(inputString) {
    var max = "",
        sum = "";
    return ''+(parseInt(inputString));
    for (i in inputString) {
        for (j in inputString) {
            if (!isNaN((inputString[j])) == true) {
                sum.concat(inputString[j]);
                if (max.length < sum.length) sum = max;
            } else {
                sum = "";
            }

        }
    }
    return max;
}
