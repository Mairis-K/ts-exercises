/**
 * Write a function that returns true if the given value is a number, false if not.
 * 
 * Example
 * 
 * Input: 6
 * 
 * Output: true
 */

function isNumber(input: any) { 
    if(input === parseInt(input, 10)){ 
        return true;
      } else {
        return false;
      }
    }


export { isNumber };