'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
};

let other = JSON.parse(JSON.stringify(user));
console.log(other); // { name: 'Василий Иванович', age: 35 }