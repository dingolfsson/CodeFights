buildPalindrome = st => {
    'use strict'
    let bool = true,
        str = "",
        i = 1;
    if (st === st.split('')
        .reverse().join('')) return true;

    while (bool && i < 10) {
        str = st.substring(0,i) + st
            .split('').reverse().join('');
        if (str == str
            .split('').reverse().join('')) return str;
        i++;
    }
    return false;
}
