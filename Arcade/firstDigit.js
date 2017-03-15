function firstDigit(inputString) {
    var regexp = new RegExp("[0-9]");
    return ''+regexp.exec(inputString);
}

/*
 * Alternative
 * return inputString.match(/\d/)[0]
}
