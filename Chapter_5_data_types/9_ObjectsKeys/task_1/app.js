'use strict';

function sumSalaries(arr) {
    let sum = 0;
    for (let i of Object.values(arr)) {
        sum += i;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries)); // 650