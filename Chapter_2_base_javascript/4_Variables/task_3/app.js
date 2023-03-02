'use strict';

const BIRTHDAY = "6.06.1799";

let getAge = data => {
    let listData = data.split(".");
    let age = listData[listData.length - 1];
    return Number(age);
}

let age = getAge(BIRTHDAY);
