lineUp = com => {
    'use strict'
    var n = 0,
        bo = true;
    for (let c of com) {
        if ( c === "L" || c === "R") bo=!bo
        if (bo) n++
    }
    return n
}
