houseNumbersSum = a => a
    .map((v, i, a) => a[i] == 0 ? a[i+1] = 0 : v)
    .reduce((a, b) => a+b)
