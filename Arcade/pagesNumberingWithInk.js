pagesNumberingWithInk = (c, numDigits) => {
    while ((c + '').length <= numDigits) {
        numDigits -= (c + '').length;
        c++;
    }
    return c-1
}
