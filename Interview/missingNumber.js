missingNumber = a => a
    .sort((x, y ) => x - y)
    .find((e, i) => e != i) - 1 || (a.includes(a.length) ? 0 : a.length)
