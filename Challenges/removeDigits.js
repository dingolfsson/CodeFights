y = i = 0, x = 9e9
removeDigits = (n, k) => {
    n = ''+n
    while (i <= n.length - k) {
        t = +n.slice(i, k+i++)
        t > y ? y = t : 0
        t < x ? x = t : 0
    }
    return [x, y]
}


/*
a = [9e9, 0]
removeDigits = (n, k) => {
    n = ''+n
    for (i=0; i<=n.length-k;i++) {
        t = +n.slice(i,i+k)
        a[0] = a[0] > t ? t : a[0]
        a[1] = a[1] < t ? t : a[1]
    }
    return a
}
*/


/*
t = '', x = 9e9, y = 0
m=Math
removeDigits = (n, k) => 
    [...n=""+n].map((e, i) => i <= n.length-k && 
        [x = m.min(x,n.slice(i,i+k))
        ,y = m.max(y,n.slice(i,i+k)) ]
        
    )
    && [x,y]
*/