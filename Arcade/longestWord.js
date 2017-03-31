longestWord = text => {
    'use strict'
    let regex = new RegExp("[^a-zA-Z]+"),
        a = text.split(regex),
        max = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[max].length < a[i].length) max = i;
    }

    return a[max];
}
