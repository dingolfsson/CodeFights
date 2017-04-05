r = /(\d)+/g
sumUpNumbers = s =>
    (!r.test(s) ? 0 : s.match(r)
    .map(Number)
    .reduce((p, c) => p + c))
                     
