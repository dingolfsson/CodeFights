s=0
schedulable= t => {
    'use strict'
    let n = t.length
    for(let i in t)
        s+=t[i][0]/t[i][1]
    return s<0.8
}
