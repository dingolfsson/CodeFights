/*
 * Begin by making the string into string array
 * If the char ASCII value is '122' (z) we return 'a'
 * Else increment char ASCII value by 1 and return the char for the value
 * Last we join everything togather an return the result
 *
*/
alphabeticShift = str => str.split("")
 .map(c => c.charCodeAt() == 122 ? 'a' : String.fromCharCode(c.charCodeAt()+1))
 .join('')
