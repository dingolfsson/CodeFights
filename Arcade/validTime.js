validTime = time => {
    'use strict'
    time = time.split`:`;
    return time[0] < 24 && time[1] < 60;
}
