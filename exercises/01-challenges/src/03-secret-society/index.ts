/**
 * A group of friends have decided to start a secret society. 
 * The name will be the first letter of each of their names, sorted in alphabetical order.
 * Create a function that takes in an array of names and returns the name of the secret society.
 */

function secretSociety(names: string[]) {
   var newName = names.sort((a, b) => a.localeCompare(b));
   console.log (newName)
   var newNameOne = newName.map((newName) => newName[0]).join('')
   console.log (newNameOne)
   return newNameOne
}

export { secretSociety };