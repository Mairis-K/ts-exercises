/**
 * You're given a string of words. 
 * You need to find the word "Nemo", and return a string like so: "I found Nemo at X!", X is the index of the word.
 * If you can't find Nemo, return "I found Nemo at X!", X is the index of the word.".
 */

function findingNemo(input: string) {
  var a = input.split(" ")
  console.log(a)
  var b = a.indexOf("Nemo")
  console.log(b)
  if (b >-1) {
    return `I found Nemo at ${b}!`
  } else {
    return "I can't find Nemo :("
  }

}

export { findingNemo };