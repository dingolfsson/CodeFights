function lineEncoding(x) {
    s = x.split``;
    var i = 1,
        sum = 0,
        first = s.shift();
    var skil = "";
    while (s.length) {
        var next = s.shift();
        if (first == next) {
            i++;
        } else {
            if (i == 1) {
                skil+=first;
            } else {
                skil+=('' + i + first)
            }
            i = 1;
        }

        first = next;
    }

    skil += i == 1 ? '' + first : '' + i + first;
    return skil;
}
