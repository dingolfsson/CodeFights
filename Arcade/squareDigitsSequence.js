squareDigitsSequence = a0 => {
    var sequence = [];
    for (var n = a0; !sequence.includes(n); ) {
        sequence.push(n);
        var x = n;
        n = 0;
        while (x) {
            n += (x % 10) * (x % 10);
            x = x / 10 | 0;
        }
    }
    return sequence.length + 1;
}
