function chessBoardCellColor(cell1, cell2) {
    var box = {brown: [],
               light: []};
    var bool = true;
    for (var i = 0; i < 8; i++) {
        for (var j = 1; j < 9; j+=2) {
            if (bool) {
                box.brown.push(String.fromCharCode(i+65)+j);
                j++;
                box.light.push(String.fromCharCode(i+65)+j);
                j--;
            } else {
                box.light.push(String.fromCharCode(i+65)+j);
                j++;
                box.brown.push(String.fromCharCode(i+65)+j);
                j--;
            }

        }
        bool = !bool;
    }
    return (box.brown.includes(cell1) && box.brown.includes(cell2)) ||
           (box.light.includes(cell1) && box.light.includes(cell2));
}
