areEquallyStrong = (uL, uR, fL, fR) =>
    (Math.max(uL, uR) === Math.max(fL, fR)
     &&
     Math.min(uL, uR) == Math.min(fL, fR));
