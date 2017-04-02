characterParity = (symbol) =>
(isNaN(+symbol) ? "not a digit" :
(+symbol % 2 == 1) ? "odd" : "even")