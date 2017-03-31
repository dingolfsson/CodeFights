sortByHeight = a => {
    'use strict'
    let s = a.filter(e => e !== -1).sort((a, b) => b - a)
    return a.map(e => (e === -1) ? -1 : s.pop())
}
