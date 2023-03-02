'use strict';

let str = "Привет";

str.test = 5;

console.log(str.test); // TypeError: Cannot create property 'test' on string 'Привет'