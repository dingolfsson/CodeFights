variableName = name => {
    // If the first letter CANNOT be 0-9
    var patt = new RegExp("[0-9]");
    // And if it is, we return false
    if (patt.test(name[0])) return false;
    // If anything in 'name' isn't a-z, A-Z, 0-9 or _
    var pattTwo = new RegExp("[^a-zA-Z0-9_]");
    // If there is nothing we get false (but return true because of !)
    // If we find something which shouldn't be there we get true (and return false)
    return !pattTwo.test(name);
}
