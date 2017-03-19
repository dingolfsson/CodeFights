function isMAC48Address(s) {
    if (s.length != 17) return false;
    return (/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/).test(s);
}
