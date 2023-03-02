'use strict';

let arr = ["a", "b"];

arr.push(function() {
    console.log( this ); // [ 'a', 'b', [Function (anonymous)] ]
});

arr[2](); // function object