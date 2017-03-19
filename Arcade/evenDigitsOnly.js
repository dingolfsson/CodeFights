function evenDigitsOnly(n) {
    var x = n.toString().split("").map(Number);
    return x.every((i) => i % 2 == 0)
}
