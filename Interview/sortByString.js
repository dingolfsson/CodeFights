sortByString = (s, t) => {
    var x = "";
    var tmp = s.split``.sort();
    for (i in t) {
        var a = tmp.indexOf(t[i]) != -1 ? tmp.indexOf(t[i]) : "";
        var b = tmp.lastIndexOf(t[i]) - a
        x += t[i].repeat(b+1);
    }
    return x
}
