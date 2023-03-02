'use strict';

function getLocalDay(date) {
    let day = date.getDay();

    if (day == 0) return 7;
    return day;
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getLocalDay(date)); // 2