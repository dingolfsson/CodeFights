r = /(\d)+/g
sumUpNumbers = inputString => {
    'use strict'
    if (!r.test(inputString)) return 0
    let x = inputString.match(r).map(Number)
    return x.reduce((prev, curr) => prev + curr)
}
