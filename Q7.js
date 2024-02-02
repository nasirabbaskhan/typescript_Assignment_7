"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Program#7: Write a program that check if the givin number is divisible by 3 or 5 or both or not divisible by anyone
function numberDivisible(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`Your number ${num} is divisible both of 3 and 5`);
    }
    else if (num % 3 === 0) {
        console.log(`Your number ${num} is divisible  3 `);
    }
    else if (num % 5 === 0) {
        console.log(`Your number ${num} is divisible  5 `);
    }
    else {
        console.log(`Your number ${num} is nor divisible by 3 and not divisible by 5 `);
    }
}
numberDivisible(14);
