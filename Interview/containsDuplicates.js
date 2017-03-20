
function containsDuplicates(a) {
    // Attempt 1
    //a.sort();
    //return !(a.every((v,i,a) => v != a[i+1]));
    //Attempt 2
    return !(a.length == new Set(a).size);
}
