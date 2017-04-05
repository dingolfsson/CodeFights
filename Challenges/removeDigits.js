a = [1e15, 0]
removeDigits = (n, k) => {
    n = (''+n).split``
    for (i = 0; i <= n.length-k; i++) {
        t = "";
        for (j = i; j < k+i; j++) t += n[j]
        a[0] = a[0] > +t ? +t : a[0]
        a[1] = a[1] < +t ? +t : a[1]
    }
    return a
}