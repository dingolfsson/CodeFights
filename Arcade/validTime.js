function validTime(time) {
    var x = time.split`:`;
    return x[0] < 24 && x[1] < 60;
}
