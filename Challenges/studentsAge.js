t = Array(100000).fill(0), c=0
studentsAge = s => {
    for (i in s) {
        if (s[i] != 0) c += t[s[i] - 1]
        t[s[i]]++
    }
    return c
}