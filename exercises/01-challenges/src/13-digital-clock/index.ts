/**
 * Write a function that takes the number of seconds and returns the digital format clock time as a string. 
 * Time should be counted from 00:00:00.
 */

function digitalClock(seconds: number) { 
    let date = new Date(0);
date.setSeconds(seconds);
let time = date.toISOString().substr(11, 8);
console.log(time)
return time
}

export { digitalClock };