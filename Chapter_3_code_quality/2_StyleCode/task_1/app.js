"use strict";
// refactoring code
function pow(x, n) { // added space between arguments and removed curly brace
    let result = 1; // added space around symbol =

    for (let i = 0; i < n; i++) { // added space
        result *= x; // removed on next string
    }

    return result;
}

let x = prompt("x?", ""); 
let n = prompt("n?", ""); // removed on next string

if (n <= 0) { // added space 
    alert(`Степень ${n} не поддерживается, 
        введите целую степень, большую 0`); // removed on next string
} else { // in one string
    alert(pow(x, n)); // added space
}
