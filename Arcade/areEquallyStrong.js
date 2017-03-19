function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    var uArr = [yourLeft, yourRight],
        fArr = [friendsLeft, friendsRight],
        uMax = Math.max( ...uArr),
        uMin = Math.min( ...uArr),
        fMax = Math.max( ...fArr),
        fMin = Math.min( ...fArr);

    return (uMax == fMax && uMin == fMin);
}
