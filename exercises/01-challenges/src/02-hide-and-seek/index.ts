/**
 * A lowercase word is hiding amongst a crowd of uppercase letters! 
 * Write a function that returns the hidden name.
 */

function hideAndSeek(crowd: string) {
    return crowd.replace(/[^a-z]/g, '');
}


// const letters = crowd.split('')
// const newLetters = []
// for(let index = 0; index < letters.lenght; index++) {
// console.log('index', index, 'element', letters[index])
// const lowerCase = letters[index].toLowerCase()
// if(letters[index] === lowerCase) {
// console.log('elements is lower letters, letters[index')
// newLetters.push(letters[index])
//}
// } const result = newLetters.join('')
// return result
// }

export { hideAndSeek };