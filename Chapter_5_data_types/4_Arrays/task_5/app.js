'use strict';

function getMaxSubSum(arr) {
    let currentSum = 0;
    let bestSum = 0;

    for (let value of arr) {
        currentSum += value;
        if (currentSum > bestSum) bestSum = currentSum;
        if (currentSum < 0) currentSum = 0;
    }
    return bestSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6