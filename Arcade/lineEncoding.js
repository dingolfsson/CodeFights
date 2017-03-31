lineEncoding = x => {
    'use strict'
    let s = x.split``,
        i = 1,
        first = s.shift(),
        rtrn = "";

    while (s.length) {
        let next = s.shift();
        if (first === next) { i++; }
        else {
            if (i === 1) { rtrn += first; }
            else { rtrn += ('' + i + first) }
            i = 1;
        }
        first = next;
    }
    return rtrn += i === 1 ? '' + first : '' + i + first;
}
