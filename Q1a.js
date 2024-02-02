"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Program#1: Write a program to convert the tempreture from Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
    let f = c * 1.8 + 32;
    console.log(`The tempreture of ${c} celsius is ${f} Fahrenheit`);
}
celsiusToFahrenheit(30);
