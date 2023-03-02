'use strict';

function camelize(str) {
    str = str.split('-');
    for (let i = 1; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join('');
}

console.log(camelize("background-color") == 'backgroundColor'); // true
console.log(camelize("list-style-image") == 'listStyleImage'); // true
console.log(camelize("-webkit-transition") == 'WebkitTransition'); // true