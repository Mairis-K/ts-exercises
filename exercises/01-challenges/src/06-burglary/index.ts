/**
 * You just returned home to find your mansion has been robbed! 
 * Given an object of the stolen items, return the total amount of the burglary (number).
 * If nothing was robbed, return the string "Lucky you!".
 */

function burglary(input: any): number | string {
    if (Object.keys(input).length !== 0) {
        const array: number[] = Object.values(input);
        const sum = array.reduce((acumulator, currentValue) => acumulator + currentValue);
        return sum;
    } else {
        return "Lucky you!";
    }
}






export { burglary };