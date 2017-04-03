charToInt = c => c.charCodeAt(0) - "a".charCodeAt(0)

intToChar = nr => String.fromCharCode("a".charCodeAt(0) + nr)

cipher26 = m => {
    'use strict'
    let str = m[0]
    
    for(let i in m) {
        if (i != 0)
            str +=
                intToChar((26 + charToInt(m[i]) -
                charToInt(m[i-1])) % 26);
    }
    return str;
}
