function commonCharacterCount(s1, s2) {
    var foo = {},
        bar = {};
    var sum = 0;

    for (var item in s1) {
        foo[s1[item]] = 0;
    }

    for (var item in s2) {
        bar[s2[item]] = 0;
    }

    for (i in s1) {
        if (s1[i] in foo) {
            foo[s1[i]]++;
        }
    }

    for (i in s2) {
        if (s2[i] in bar) {
            bar[s2[i]]++;
        }
    }

    var s1 = Object.keys(foo).length;
    var s2 = Object.keys(bar).length;

    for (var i = 0; i < s1; i++) {
        for (var j = 0; j < s2; j++) {
            if (Object.keys(foo)[i] == Object.keys(bar)[j]) {
                if (foo[Object.keys(foo)[i]] < bar[Object.keys(bar)[j]]) {
                    sum +=foo[Object.keys(foo)[i]];
                } else {
                    sum +=bar[Object.keys(bar)[j]];
                }
            }
        }
    }

    return sum;
}
