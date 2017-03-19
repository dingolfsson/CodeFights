function digitDegree(n) {
    var a = n.toString(10).split('').map(Number);
    var sum = 0,
        count = 0;

    while (a.length != 1) {
        count++;
        sum = 0;
        for (i in a) {
            sum+=a[i];
        }
        a = sum.toString(10).split('').map(Number);
    }
    return count;
}
