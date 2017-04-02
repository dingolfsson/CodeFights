'use strict'
isUnstablePair = (f1, f2) =>
(f1 < f2) !== (f1.toLowerCase() < f2.toLowerCase())
