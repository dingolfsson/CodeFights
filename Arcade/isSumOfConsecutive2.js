isSumOfConsecutive2 = n => {
    var result = 0;
    for (var i = 1; i < n; i++) {
        var number = n,
            subtrahend = i;
        while (number > 0) {
            number -= subtrahend;
            subtrahend++;
        }
        if (number == 0){
            result++;
        }
        
    }

    return result;
}
