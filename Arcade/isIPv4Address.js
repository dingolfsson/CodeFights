function isIPv4Address(inputString) {
    var a = inputString.split('.');
    if (a.length !== 4) return false;

    for (i in a) {
        if (isNaN(a[i])) return false;
        var x = parseInt(a[i]);
        if (255 < x || x === '' || isNaN(x)) return false;
    }
    return true;
}
