function messageFromBinaryCode(code) {
    var final = code.match(/\d{8}/g);
    var binString = '';
    final.map(i => binString += String.fromCharCode(parseInt(i, 2)));
    return binString;
}
