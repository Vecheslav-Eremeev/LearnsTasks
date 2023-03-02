'use strict';

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("Enter number", '');
let n = prompt("Enter degree of number", '');

while (n <= 0){
    alert(`Degree ${n} is not supported, please enter number more than zero`);
    n = prompt("Enter degree of number", '');
}

alert(pow(x, n));