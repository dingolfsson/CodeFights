alternatingSums = a => a.reduce((a, v, i) => (a[i%2] += v,a), [0,0])
