chessKnight = cell => {
    'use strict'
    // Buffer splits chars to arrray and to decimal value
    // "a1" => [97, 49]
    let b = new Buffer(cell);
    // x: 97 ('a') now becomes 1 (from 1-8)
    // y: 49 ('1') now becomes 1 (from 1-8)
    let x = b[0] - 96,
        y = b[1] - 48;

    // Instead of working with 8 x 8 options,
    // we're now working with 4 x 4 (1/4 the size)
    x = (x > 4 ? x - (x % 5 * 2 + 1) : x);
    y = (y > 4 ? y - (y % 5 * 2 + 1) : y);

    if (x * y > 8) return 8;
    else if (x * y > 5) return 6;
    else if (x * y > 2) return 4;
    else if (x * y == 2) return 3;
    else return 2;
}
