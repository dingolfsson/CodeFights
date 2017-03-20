function alternatingSums(a) {
    var sum = [0, 0];
    for (i in a) {
        (i % 2 == 0 ? sum[0] += a[i] : sum[1] += a[i])
    }
    return sum;
}
