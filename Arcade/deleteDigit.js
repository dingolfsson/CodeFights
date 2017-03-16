function deleteDigit(n) {
    var max = 0,
        x = (''+n).split``,
        sum = "";

    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < x.length; j++) {
            if (i != j)
                sum += x[j];
        }
        if (max < parseInt(sum))
            max = parseInt(sum);
        sum = "";
    }

    return max;
}
