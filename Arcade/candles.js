candles = (candlesNumber, makeNew) => {
    'use strict'
    var sum = candlesNumber;
    var candles;
    var leftOvers = candlesNumber;
    
    while (makeNew <= leftOvers) {
        candles = Math.floor(leftOvers / makeNew);
        leftOvers -= Math.floor(leftOvers / makeNew) * makeNew;
        sum += candles;
        leftOvers += candles;
    }
    
    return sum;
}
