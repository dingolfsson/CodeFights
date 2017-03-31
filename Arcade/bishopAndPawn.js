bishopAndPawn = (bishop, pawn) => {
    'use strict'
    if (bishop[0] == pawn[0] ||
        bishop[1] == pawn[1])
        return false;

    var b = bishop.split``.map(i => i.charCodeAt());
    var p = pawn.split``.map(i => i.charCodeAt());

    let i = 1;
    while ( i < 8 ) {
        if (b[0] + i == p[0] && b[1] + i == p[1] ||
            b[0] - i == p[0] && b[1] - i == p[1] ||
            b[0] + i == p[0] && b[1] - i == p[1] ||
            b[0] - i == p[0] && b[1] + i == p[1])
            return true;
        i = -~i;
    }
    return false;
}
