"use strict";
var add;
add = function (a, b) {
    console.log(a + b);
    return a + b;
};
var calculation;
calculation = function (a, b, c) {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(4, 2, 'minus'));
var userDetails2;
userDetails2 = function (id, userInfo) {
    return id + userInfo.name;
};
var temp = userDetails2(5, { name: 'M', age: 2 });
console.log(temp);
