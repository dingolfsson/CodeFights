consecutiveBit = n =>
    n.toString(2)
    .split``.map((v,i,a) =>
    v == "1" && a[i+1] == "1" ? 1 : 0)
    .includes(1)
