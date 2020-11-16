/**
 * A family want's to go on a vacation, but don't know what is the total amount of money they can spend on the trip.
 * Create the function that takes an array with objects and returns the sum of people's budgets.
 */

function vacationBudget(family: Person[]): any { 
    const allBudget = family.reduce((one, two) => one + two.budget, 0);
    console.log(allBudget)
    return allBudget
}

export { vacationBudget };

interface Person {
    name: string;
    age: number;
    budget: number;
}