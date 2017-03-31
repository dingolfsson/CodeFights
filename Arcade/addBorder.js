addBorder = picture =>
        ['*'.repeat(picture[0].length + 2),
        ...picture.map(line => `*${line}*`),
        '*'.repeat(picture[0].length + 2)]
