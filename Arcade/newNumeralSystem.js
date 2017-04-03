newNumeralSystem = n => {
    'use strict'
    var allnum = []
    let x = (n.charCodeAt() - 65)
    for (let i = 0; i <= x; i++) {
        var tmp = [i+65, x+65]
        allnum.push(tmp)
        x--;
    }
    var fin = []
    for (let i in allnum) {
        fin.push(String.fromCharCode(allnum[i][0]) + " + " + String.fromCharCode(allnum[i][1]))
    }
    return fin;
}
