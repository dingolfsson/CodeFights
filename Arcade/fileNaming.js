fileNaming = names => {
    'use strict'
    let k,
        final = [];
    for (let i = 0; i < names.length; i++) {
        if (final.includes(names[i])) {
            k = 1;
            while (final.includes(names[i]+'('+k+')')) {
                k++;
            }
            final.push(names[i]+'('+k+')');
        } else {
            final.push(names[i]);
        }
    }
    return final;
}
