leastFactorial = n => {
    var s = 1, i = 2;
    while ( s < n ) {
        s *= i
        i++
    }
    return s
}
