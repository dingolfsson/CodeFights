isMAC48Address = s => (s.length !== 17 ?
                       false :
                       (/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/)
                       .test(s))
