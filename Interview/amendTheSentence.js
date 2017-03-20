
function amendTheSentence(s) {
    return (s.match(/[a-z]+|[A-Z][a-z]*/g)).join(' ').toLowerCase();
}
