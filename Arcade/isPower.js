isPower = n => {
    if (n == 1) return true;
    
    for (var i = Math.floor(Math.sqrt(n)); 1 < i; i--) {
        for (var j = 2; j <= Math.floor(n/2); j++) {
            if (Math.pow(i, j) == n)
                return true;
        }
    }
    return false;
}
