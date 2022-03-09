import { isEven } from "./is-even";



export function isEvenTruncateDecimal(n: number): boolean {

    const val = Math.floor(n);

    return isEven(val);

}

export const PI = 3.1415927;

export const instructor = {
    firstName: 'byron',
    lastName: 'brown',
    age: 32,
    isMarried: true,
    siblings: [
        {
            name: 'angel',
            occupation: 'annoying'
        }
    ],
    occupation: 'apple sauce dispencer',
    vehicle: 'talking car from that 80s show',
    catchphrase: 'i want to be like michelle when i grow up'
}


