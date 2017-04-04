// O(n^3) apperantly does work
tripletSum = (x, a) => {
    a.sort((a,b) => a - b)
    for (i = 0; i < a.length-2; i++)
        for (j = i+1; j < a.length-1; j++)
            for (k = j+1; k < a.length; k++){
                if (a[i] + a[j] + a[k] === x) return true
                if (a[i] + a[j] + a[k] > x) break
            }
    return false
}
