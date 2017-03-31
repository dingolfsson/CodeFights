arrayChange = inputArray => {
    'use strict'
    let count = 0;

    for (let i = 1; i < inputArray.length; i++) {
        while (inputArray[i] <= inputArray[i-1]) {
            inputArray[i]++;
            count++;
        }
    }
    return count;
}
