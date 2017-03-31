commonCharacterCount = (s1, s2) => {
    Array.prototype.map.call(s1, i => s2 = s2.replace(i, "-"))
    return s2.match(/\-/g).length;
}
