phoneCall = (first, twoToTen, afterTen, S) => {
    if (S < first) return 0;
    S -= first;
    if (S < twoToTen * 9) return S / twoToTen + 1 | 0;
    S -= twoToTen * 9;
    return S / afterTen
 + 10 | 0;
}
