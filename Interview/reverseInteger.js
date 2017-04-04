reverseInteger = x => {
    'use strict'
    let str = (''+x)
    let op = false;
    if (str.charAt(0) == '-') {
        op = !op;
        str = str.substring(1);
    }
    let i = 0, j = str.length-1;
    while (str.charAt(i) == '0' || str.charAt(j) == '0') {
        if (str.charAt(i) == '0') i++
        if (str.charAt(j) == '0') j--
    }
    str = (str.substring(i, j+1)).split``.reverse``.join``
    return op ? +('-' + str) : +(str) 
}
