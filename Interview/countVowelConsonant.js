x = 0
vow = ['a', 'e', 'i', 'o', 'u']
countVowelConsonant = (s) => {
    x = [...s].filter(i => vow.includes(i)).length
    return x + ([...s].length-x)*2
}
