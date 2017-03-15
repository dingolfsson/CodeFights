function extractEachKth(a, k) {
    return a.filter((_,i) => ((i + 1) % k) !== 0);
}
