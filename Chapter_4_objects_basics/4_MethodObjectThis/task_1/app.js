'use strict';

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log(user.ref.name); // TypeError: Cannot read properties of undefined (reading 'name')