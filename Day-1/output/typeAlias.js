"use strict";
var userDetails = function (id, user) {
    console.log("User id is " + id + ", name is " + user.name + " and age is " + user.age);
};
userDetails(10, { name: "A", age: 10 });
