function sudoku(grid) {
    // If any horizantal has duplicates
    var unique;
    for ( i = 0; i < grid.length; i++) {
        unique = [...new Set(grid[i])];
        if (unique.length != 9) return false;
    }

    // Check vertial
    var unique2 = [];
    for ( i = 0; i < grid.length; i++) {
        for ( j = 0; j < grid.length; j++) {
            unique2.push(grid[j][i]);
        }

        unique = [...new Set(unique2)];
        if (unique.length != 9) return false;
        unique2 = [];
    }

    // Check 3x3
    var duplicate = grid;

    var count = 1;
    for (i = 0; i < 9; i++) {

        for (j = 0; j < 9; j++) {
            unique2.push(...duplicate[j].splice(0,3));
            if (j % 3 == 2) {
                count++;
                unique = [...new Set(unique2)];
                if (unique.length != 9) return false;
                unique2 = [];
            }
            if (count == 9)
                return true;
        }
    }

    //return true;

}
