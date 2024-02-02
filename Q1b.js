"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Program#1: Write a program to convert the tempreture from  Fahrenheit to Celsius
function fahrenheitToCelsius(f) {
    let c = (f - 32) / 1.8;
    console.log(`The tempreture of ${f} Fahrenheit is ${c} Celsius`);
}
fahrenheitToCelsius(86);
