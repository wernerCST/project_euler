/**
 * 
 *  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *  Find the sum of all the multiples of 3 or 5 below 1000.
 * 
 */

let multiplesCheck = [3,5];
let range = 10;
let sum = 0;

// for (let i = 1; i < range; i++) {
//     if(i % multiplesCheck[0] == 0 || i % multiplesCheck[1] == 0) {
//         console.log(`${i} is a multiple of ${multiplesCheck[0]}`)
//         sum += i;
//     }
//   }
// console.log(`the total sum of all multiples of ${multiplesCheck[0]} and ${multiplesCheck[1]} is ${sum}`);

// now to make it better 

for (let i = 1; i < range; i++) {
    multiplesCheck.forEach(n => {
        if(i % n == 0) {
            console.log(`${i} is a multiple of ${n}`)
            sum += i;
        }        
    });
  }

  console.log(`the total sum of all multiples of the following digits ${multiplesCheck.toString()} is ${sum}`);

  /**
   * Here I wanted a way to have the flexibility to change the multiplesCheck 
   * array be any digit any size and the algo would just perform the task.
   */