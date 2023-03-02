'use strict';

function count(arr){
    return Object.keys(arr).length;
}

let user = {
    name: 'John',
    age: 30
};

console.log( count(user) ); // 2