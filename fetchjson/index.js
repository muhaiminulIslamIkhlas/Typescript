"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/posts/1";
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
    var todo = response.data;
    var ID = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    console.log("\n  The Todo with ID: " + ID + "\n  Has a title of: " + title + "\n  Is it finished: " + completed + "\n  ");
});
