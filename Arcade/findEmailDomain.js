function findEmailDomain(address) {
    var domain = address.split("@");
    return domain[domain.length-1];
}
