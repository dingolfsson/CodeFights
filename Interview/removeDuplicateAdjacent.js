removeDuplicateAdjacent = s => {
    'use strict'
    let i = 0, j = i+1;
    while (containsDuplicates(s, i) !== -1) {
        i = containsDuplicates(s, i);
        j = i+1;
        while (s[i] === s[j]) { j++ }
        s = s.replace(s.substring(i,j), '')
    }
    return containsDuplicates(s, 0) !== -1 ? removeDuplicateAdjacent(s) : s;
}
containsDuplicates = (s, x) => {
    'use strict'
    for (let i = x; i < s.length; i++) {
        if (s[i] == s[i+1]) return i
    }
    return -1;
}
