electionsWinners = (votes, k) => {
    'use strict'
    let max = Math.max(...votes),
        numMax = votes.filter(i => i == max).length
    if (k === 0) return (numMax === 1 ? 1 : 0);

    return votes.filter(i => i + k > max).length;
}
