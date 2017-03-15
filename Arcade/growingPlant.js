function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var target = 0,
        count = 0;
    while (target < desiredHeight) {
                count++;
        target+= upSpeed;
        if (target >= desiredHeight) break;
        target -= downSpeed;
    }
    return count;
}
