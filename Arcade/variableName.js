variableName = name => {
    'use strict'
    // If the first letter CANNOT be 0-9
    let patt = new RegExp("[0-9]");
    // if true false
    if (patt.test(name[0])) return false;

    // If anything in 'name' isn't a-z, A-Z, 0-9 or _
    let pattTwo = new RegExp("[^a-zA-Z0-9_]");
    // If there is nothing we get false (but return true because of !)
    // If we find something which shouldn't be there we get true (and return false)
    return !pattTwo.test(name);
}
