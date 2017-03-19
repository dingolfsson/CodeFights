function arrayReplace(a, replace, sub) {
    return a.map(num => num == replace ? sub : num);
}
