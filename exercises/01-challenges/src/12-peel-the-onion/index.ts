/**
 * You have made a virtual onion and want to peel off the outer layer.
 * Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.
 * 
 * Example:
 * 
 * Input:
[
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"]
]

 * Output: 
[
  ["f", "g"],
  ["j", "k"]
]
 */

function peelTheOnion(onion: (string | number)[][]): string[] | number[] {
  console.log('Input', onion);
  const removedHorizontal: any[] = [];

  for (let i = 0; i < onion.length; i++) {
    const thisElement = onion[i];

    if (i !== 0 && i !== onion.length - 1) {
      const innerArray: any[] = [];

      for (let j = 0; j < thisElement.length; j++) {
        const thisCell: string | number = thisElement[j]

        if (j !== 0 && j !== thisElement.length - 1) {
          innerArray.push(thisCell)
        }
      }
      removedHorizontal.push(innerArray)
      console.log('innerArrat', innerArray)
    }
  }
  console.log('removeHorizontal', removedHorizontal);
  return removedHorizontal
}

export { peelTheOnion };



