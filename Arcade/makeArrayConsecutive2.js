function makeArrayConsecutive2(a) {
    return Math.abs(a.length - (Math.max(...a) - Math.min(...a)) -1);
}
