singleNumber = n =>
n.find((v, i, a) => a.indexOf(v) == i && a.lastIndexOf(v) == i)