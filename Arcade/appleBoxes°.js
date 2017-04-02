appleBoxes = k => {
    var oddYellow = 0,
        evenRed = 0;
    
    while (k > 0) {
        if (k % 2 != 0) oddYellow += k * k
        else evenRed += k * k
        k -= 1;
    }
    return (evenRed - oddYellow);
}
