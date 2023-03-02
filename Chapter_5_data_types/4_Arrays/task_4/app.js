"use strict";

function sumInput() {
    let numbers = [];
    let sum = 0;

    while (true) {
        let value = prompt("Enter number", 0);

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
        sum += +value;
    }
    return sum;
}

alert(sumInput());
