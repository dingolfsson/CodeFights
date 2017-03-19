function depositProfit(deposit, rate, threshold) {
    var c = 0;
    while (deposit < threshold) {
        c++;
        deposit*= (rate/100) + 1;

    }
    return c;
}
