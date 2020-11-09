/**
 * Write a function that returns true if the given string ends with a question mark, false if not.
 * 
 * Example
 * 
 * Input: "French fries?"
 * Output: true
 */

function isQuestion(input: string) { 
    if (input.endsWith("?")) {
        return true
    } else {
        return false
    }
}
       
    
    
 


export { isQuestion };