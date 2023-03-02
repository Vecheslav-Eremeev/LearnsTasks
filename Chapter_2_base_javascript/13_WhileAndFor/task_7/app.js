'use strict';

let n = Number(prompt('Enter number for range', 1));

let isPrime = n => {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
};
for (let i = 1; i <= n; i++) {
    if (isPrime(i)) console.log(i);

}