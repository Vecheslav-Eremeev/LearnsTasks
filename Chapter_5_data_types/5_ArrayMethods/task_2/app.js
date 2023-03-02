'use strict';

function filterRange(arr, start, end) {
    return arr.filter(item => (start <= item && item <= end));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // [ 3, 1 ]

console.log( arr ); // [ 5, 3, 8, 1 ]