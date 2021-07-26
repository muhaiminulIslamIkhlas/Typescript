"use strict";
let add;
add = (a, b) => {
    console.log(a + b);
    return a + b;
};
let calculation;
calculation = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(4, 2, 'minus'));
let userDetails2;
userDetails2 = (id, userInfo) => {
    return id + userInfo.name;
};
let temp = userDetails2(5, { name: 'M', age: 2 });
console.log(temp);
