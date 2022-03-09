import { addTwoNumbers } from "../utils/add-two-numbers";
import { isEven } from "../utils/is-even";
import { instructor } from "../utils/other-utils";


describe('More stuff in ts', () => {
    it('should spread arrays like butta', () => {
        // the spread operator
        // ...
        // denotes spreading the indices of an array ( or object)
        // across a new structure
        // in other words used to create a deep copy of an old array

        const myNums: number[] = [1,5,3,9];
        
        //spread the indexes of myNums across this new array
        let spreadNums: number[] = [...myNums];
        //spreadNums is a deep copy of myNums [1,5,3,9];

        //maps are boring version of spread
        let boringSpread = myNums.map((eachNum: number) => eachNum);

        let moreNums: number[] = [ ...myNums, 7, 2, 44];
        //[1,5,3,9,7,2,44]

        let myTwoNumbers:[number,number] =[2,3];
        addTwoNumbers(...myTwoNumbers);
        

    });

    it('spread with objects', () => {
        let mildManneredInstructor = {
                ...instructor
        };

        let faveFood = {
            dinner : 'taco'

        }
        console.log(mildManneredInstructor);
        /*firstName: 'byron',
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
        attribute : 'TeleKinesis'
        */

        const superInstructor = {
            ...mildManneredInstructor,
            ...faveFood,
            attribute:'TeleKinesis', // adding a new property to the instructor object
            occupation: 'super Instructor' // overiding a property from the source object
        }

         /*firstName: 'byron',
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
        attribute : 'TeleKinesis'
        occupation: 'super Instructor'
        */
    });
    
});