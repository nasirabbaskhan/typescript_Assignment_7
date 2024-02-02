"use strict";
//  Program#5: Write a program that determine the catagory of age.
Object.defineProperty(exports, "__esModule", { value: true });
function dagecatagorye(age) {
    if (age >= 0 && age <= 12) {
        console.log("Child");
    }
    else if (age >= 13 && age <= 19) {
        console.log("Teenager");
    }
    else {
        console.log("Adult");
    }
}
dagecatagorye(20);
