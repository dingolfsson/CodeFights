stolenLunch = n => n
.replace(/[0-9|a-j]/g, c =>
         '0123456789abcdefghij'
        ['abcdefghij0123456789'.indexOf(c)])

