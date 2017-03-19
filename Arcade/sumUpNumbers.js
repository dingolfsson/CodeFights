function sumUpNumbers(inputString) {
    if (!/(\d)+/g.test(inputString))
        return 0;

    var x = inputString.match(/(\d)+/g).map(Number);
    return x.reduce( (prev, curr) => prev + curr );
}
