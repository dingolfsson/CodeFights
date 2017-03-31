avoidObstacles = a => {
    'use strict'
    for (let i = 2; ; i++)
        if (a.every(x => x%i !== 0))
            return i
}
