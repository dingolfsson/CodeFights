function palindromeRearranging(inputString) {
    var iS = inputString.split("").sort();

    var error = 0;

    while (iS.length) {
        var del = iS.shift();
        if (iS[0] == del) {
            iS.shift();
        } else {
            error++;
        }
    }

    return error < 2;
}
