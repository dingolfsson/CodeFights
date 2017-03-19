function absoluteValuesSumMinimization(a) {
    if (a.length < 3) return Math.min(...a);

    var x = Infinity;
    var rtn;
    for (i in a) {
        var sum = 0;

        for (j in a) {
            sum += Math.abs(a[i] - a[j]);
        }
        if (sum < x) {
            x = sum;
            rtn = a[i];
        }
    }
    return rtn;
}
