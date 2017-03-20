function isLucky(n) {
    var len = (n + '').length;
    var s1 = (n + '').substring(0, len/2);
    var s2 = (n + '').substring(len/2);

    function add(string) {
        string = string.split('');                 //split into individual characters
        var sum = 0;                               //have a storage ready
        for (var i = 0; i < string.length; i++) {  //iterate through
            sum += parseInt(string[i],10);         //convert from string to int
        }
        return sum;                                //return when done
    }

    return add(s1) == add(s2);

}
