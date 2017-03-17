function longestWord(text) {
    var regex = new RegExp("[^a-zA-Z]+");

    var a = text.split(regex);
    var max = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[max].length < a[i].length)
            max = i;
    }

    return a[max];

}
