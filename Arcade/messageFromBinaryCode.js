re = /\d{8}/g
messageFromBinaryCode = code => {
    'use strict'
    let final = code.match(re);
    let binString = '';
    final.map(i =>
              binString +=
              String.fromCharCode(parseInt(i, 2)));
    return binString;
}
