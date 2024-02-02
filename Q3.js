"use strict";
// Program#3: Write a program to converts given number of days into weeks and days
Object.defineProperty(exports, "__esModule", { value: true });
function numberIntoWeeks(yourNumber) {
    let weeks = Math.floor(yourNumber / 7);
    let days = yourNumber % 7;
    console.log(`the ${yourNumber} days have  ${weeks} weeks and ${days} days `);
}
numberIntoWeeks(17);
