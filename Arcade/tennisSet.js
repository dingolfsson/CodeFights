tennisSet = (score1, score2) => {
    'use strict'
    let a = Math.max(score1, score2)
    let b = Math.min(score1, score2)
    return (a === 6 && b < 5) | ((b === 5 | b === 6) && a === 7 )
}