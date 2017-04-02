reflectString = (s) => String.fromCharCode
(...(s.split``.map((i) =>
                   (122 - i.charCodeAt() + 97))))