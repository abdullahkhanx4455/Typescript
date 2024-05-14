"use strict";
//Assignment:10: write a function in which number is divisible by 2 and 3
function checkk(num1) {
    if (num1 % 2 === 0 && num1 % 3 === 0) {
        console.log("number is divisible by 2 and 3");
    }
    else if (num1 % 2 === 0) {
        console.log("number is divisible by 2");
    }
    else if (num1 % 3 === 0) {
        console.log("number is divisible by 3");
    }
    else {
        console.log("number is not divisible ");
    }
    {
    }
    {
    }
}
checkk(12);
