'use strict'
isInfiniteProcess = (a, b) => (a > b) ? true : ((b - a) % 2 === 0) ? false : true