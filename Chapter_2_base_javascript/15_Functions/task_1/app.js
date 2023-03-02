'use strict';

function checkAgeFirst(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkAgeSecond(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Родители разрешили?');
}
// Функций checkAgeFirst и checkAgeSecond будут работать одинаково