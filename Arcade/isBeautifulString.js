isBeautifulString = (inputString) => {
    'use strict'
    if (!inputString.includes("a")) return false;

    let char = "a",
        reg = new RegExp(char, "g"),
        current = (inputString.match(reg)).length,
        next = 0;

    while (char.charCodeAt(0) != 122) {
        next = current;
        char = String.fromCharCode(char.charCodeAt(0) + 1);
        reg = new RegExp(char, "g");
        current = (inputString.match(reg) || []).length;
        if (next < current) return false;
    }
    return true;
}
