additionWithoutCarrying = (param1, param2) => {
    if (param1 === 0 || param2 === 0) return Math.max(param1, param2)
    
    var x = param1.toString().split('').reverse();
    var y = param2.toString().split('').reverse();
    var longer, shorter, mid;
    
    (x.length < y.length) ? longer = y.length : longer = x.length;
    (y.length < x.length) ? shorter = y.length : shorter = x.length;
    mid = longer - shorter;
    var sum = "";
    var i = shorter;
    
    if (x.length < y.length) {
        while (mid != 0) {
            sum += parseInt(y[longer-1]);
            mid--;
            longer--;
        }
    } else if (y.length < x.length) {
        while (mid != 0) {
            sum += parseInt(x[longer-1]);
            mid--;
            longer--;
        }
    }
    
    
    while (i > 0) {
        sum += (parseInt(x[i-1]) + parseInt(y[i-1])) % 10;
        i--;
    }
    return parseInt(sum);
}
