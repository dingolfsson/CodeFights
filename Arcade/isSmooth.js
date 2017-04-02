isSmooth = arr => {
    if (arr[0] !== arr[arr.length-1]) return false
    
    if (arr.length % 2 == 1) {
        if (arr[Math.floor(arr.length/2)] === arr[0]) return true
        return false;
    }
    
    return ((arr[arr.length/2-1] + arr[arr.length/2]) === arr[0] ? true : false)
}
