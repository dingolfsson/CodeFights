growingPlant = (upSpeed, downSpeed, desiredHeight) => {
    'use strict'
    let target = 0,
        count = 0;
    while (target < desiredHeight) {
                count++;
        target+= upSpeed;
        if (target >= desiredHeight) break;
        target -= downSpeed;
    }
    return count;
}
