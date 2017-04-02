lateRide = n => {
    'use strict'
    let h = n / 60 | 0,
        m = n % 60;
    return (h / 10 | 0) + h % 10 + (m / 10 | 0) + m % 10
}