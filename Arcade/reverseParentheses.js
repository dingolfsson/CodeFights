regexp = /\(([^()]*)\)/i
reverseParentheses = s =>
    (s.includes('(') ? reverseParentheses(strReverse(s)) : s)

strReverse = s => {
    'use strict'
    let subStr = regexp.exec(s)[1].split('').reverse().join('')
    return s.replace(regexp, subStr)
}
