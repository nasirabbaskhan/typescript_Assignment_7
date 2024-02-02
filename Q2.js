"use strict";
// Program#2: Write a program to calculate percentage
Object.defineProperty(exports, "__esModule", { value: true });
function calculatePercentage(yourNumber, percentage) {
    let yorPercentage = (yourNumber * percentage) / 100;
    console.log(`the ${percentage} % of ${yourNumber} is ${yorPercentage} `);
}
calculatePercentage(500, 3);
